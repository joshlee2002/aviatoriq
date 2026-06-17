"""
Download all AviatorIQ site images from Pexels.
Each image is mapped to a specific aviation search query for best visual match.
"""
import requests
import os
import time

PEXELS_API_KEY = "2wfvNnbjMpRPDlIWDiCPtTXxPOlR7CE68KgwuhEC0mwWb2YJ2D7wJeft"
UPLOADS_DIR = "/home/ubuntu/aviatoriq/uploads"

# filename -> (search_query, orientation, preferred_index)
# preferred_index: which Pexels result to pick (0=first, 1=second etc.) for best match
IMAGE_MAP = [
    ("hero-cockpit_b4476f04.jpg",               "commercial airplane cockpit pilot flying",          "landscape", 0),
    ("hero-cadet_e21689fe.jpg",                  "young pilot trainee cockpit smiling uniform",       "landscape", 0),
    ("hero-medical_faa9a026.jpg",                "aviation medical examination doctor pilot",         "landscape", 0),
    ("airline-fleet_f3223103.jpg",               "commercial airline fleet aircraft runway",          "landscape", 0),
    ("airline-interview_3a8f2c1d.jpg",           "job interview professional business suit",          "landscape", 0),
    ("airline-interview_9d4c2b8e.jpg",           "pilot captain uniform professional portrait",       "landscape", 0),
    ("airline-interview-usa_2b9e4f7a.jpg",       "professional interview business meeting USA",       "landscape", 1),
    ("airline-pilot-cockpit_3c8e2f1a.jpg",       "airline pilot cockpit flying commercial aircraft",  "landscape", 0),
    ("airline-salary_3b7c8d1e.jpg",              "pilot career professional aviation salary",         "landscape", 0),
    ("airplane-takeoff_6f139e92.jpg",            "commercial airplane takeoff runway sunset",         "landscape", 0),
    ("aptitude-test_3c7e9f2a.jpg",               "aptitude test exam student concentration writing",  "landscape", 0),
    ("aptitude-test_9d4c2b8e.jpg",               "pilot aptitude test assessment aviation",           "landscape", 1),
    ("atp-certificate_9e4f2b7a.jpg",             "pilot certificate aviation licence document",       "landscape", 0),
    ("atp-flight-school_9d4c2b8e.jpg",           "flight school training aircraft runway USA",        "landscape", 0),
    ("atpl-exams_5e2d1a8c.jpg",                  "aviation exam study books pilot training ground",   "landscape", 0),
    ("aus-pilot_9d4c2b8e.jpg",                   "australian outback aircraft aviation pilot",        "landscape", 0),
    ("aviation-medical_1b85dcaa.jpg",            "aviation medical exam doctor stethoscope",          "landscape", 0),
    ("ba-speedbird_2f8a3c9e.jpg",                "British Airways aircraft Heathrow runway",          "landscape", 0),
    ("best-route-airline_3c8e2f1a.jpg",          "airline career path pilot progression",             "landscape", 0),
    ("best-schools-usa_9e4f2b7a.jpg",            "american flight school training aircraft propeller","landscape", 0),
    ("cadet-programme_7f3a2c9e.jpg",             "airline cadet training programme pilot uniform",    "landscape", 0),
    ("cadet-simulator_2a0c874e.jpg",             "flight simulator training cockpit cadet",           "landscape", 0),
    ("cadet-sponsored_7b4e9f2a.jpg",             "sponsored pilot training cadet programme airline",  "landscape", 0),
    ("canada-loans_f4g5h6i7.jpg",                "canada student loan finance education",             "landscape", 0),
    ("cfi-career_9f2a4b7c.jpg",                  "flight instructor teaching student aircraft",       "landscape", 0),
    ("class1-disqualifiers_e8f2a91c.jpg",        "medical health examination doctor patient",         "landscape", 0),
    ("class1-medical-conditions_c671ee2f.png",   "aviation medical class 1 health examination",      "landscape", 0),
    ("class1-medical_c4a3b12e.jpg",              "aviation class 1 medical certificate examination",  "landscape", 1),
    ("commercial-cert-usa_8f3a2c1d.jpg",         "commercial pilot licence certificate USA",          "landscape", 0),
    ("cpl-guide_9dea1e2a.jpg",                   "commercial pilot licence training aircraft",        "landscape", 0),
    ("delta-propel_9d4c2b8e.jpg",                "Delta Airlines aircraft runway professional",       "landscape", 0),
    ("dual-instruction_48048c62.jpg",            "flight instructor student dual training aircraft",  "landscape", 0),
    ("easyjet-generation_0954c6af.jpg",          "easyJet aircraft runway orange airline",            "landscape", 0),
    ("embry-riddle_9d4c2b8e.jpg",                "university aviation flight school campus USA",      "landscape", 0),
    ("emirates-cadet_p1q2r3s4.jpg",              "Emirates airline aircraft Dubai aviation",          "landscape", 0),
    ("europe-costs_l2m3n4o5.jpg",                "europe aviation training costs finance",            "landscape", 0),
    ("europe-salary_h8i9j0k1.jpg",               "european pilot salary career aviation",             "landscape", 0),
    ("europe-schools_p6q7r8s9.jpg",              "european flight school training aircraft",          "landscape", 0),
    ("faa-ame-doctor_9d5ff4b3.jpg",              "doctor medical examination patient USA",            "landscape", 0),
    ("faa-medical_60c77c69.jpg",                 "FAA medical certificate aviation USA pilot",        "landscape", 0),
    ("first-officer-job_23328c88.jpg",           "first officer pilot cockpit airline job",           "landscape", 0),
    ("first-officer_8f42d3d9.jpg",               "first officer co-pilot uniform airline cockpit",    "landscape", 0),
    ("flight-instructor_8a93442c.jpg",           "flight instructor pilot teaching aircraft",         "landscape", 0),
    ("flight-school-runway_2b67dbee.jpg",        "flight school small aircraft runway training",      "landscape", 0),
    ("flight-schools-uk_d1a2b3c4.jpg",           "UK flight school training aircraft British",        "landscape", 0),
    ("frozen-atpl_415e1a95.jpg",                 "pilot ground school study aviation exam",           "landscape", 0),
    ("fund-training-usa_d29d0341.jpg",           "pilot training funding finance USA loan",           "landscape", 0),
    ("gi-bill-training_775b4cc1.jpg",            "military veteran pilot training USA",               "landscape", 0),
    ("hour-building-usa_cbbd5703.jpg",           "pilot hour building small aircraft USA flying",     "landscape", 0),
    ("hour-building_4e2d1a8c.jpg",               "pilot hour building small aircraft flying",         "landscape", 0),
    ("how-to-become-pilot_a1ed518f.jpg",         "how to become a pilot training aircraft",           "landscape", 0),
    ("instructor-teaching_bbff2f90.jpg",         "flight instructor teaching student cockpit",        "landscape", 1),
    ("instrument-rating-usa_a47c6d18.jpg",       "instrument rating IFR training USA cockpit",        "landscape", 0),
    ("instrument-rating_da56b64b.jpg",           "instrument rating IFR training cockpit instruments","landscape", 0),
    ("instruments-panel_33ae88e6.jpg",           "aircraft cockpit instrument panel gauges close up", "landscape", 0),
    ("integrated-training_a566fa21.jpg",         "integrated pilot training flight school",           "landscape", 0),
    ("integrated-vs-modular-timeline_77509ad4.png","pilot training timeline comparison",              "landscape", 0),
    ("interview-assessment_c517e045.jpg",        "pilot interview assessment professional aviation",  "landscape", 0),
    ("mcc-joc_88c97923.jpg",                     "multi crew cooperation simulator training airline", "landscape", 0),
    ("mcc-simulator_d3ac3716.jpg",               "MCC simulator training airline crew cockpit",       "landscape", 1),
    ("medical-certificate_9ad09b89.jpg",         "aviation medical certificate document health",      "landscape", 0),
    ("medical-check_8e2a1b9f.jpg",               "pilot medical check examination health",            "landscape", 0),
    ("medical-exam_79659228.jpg",                "medical examination doctor patient health check",   "landscape", 0),
    ("military-airline_3b8b8da5.jpg",            "military pilot to airline transition career",       "landscape", 0),
    ("night-flight_2e96753a.jpg",                "aircraft night flight city lights runway",          "landscape", 0),
    ("part61-141_25c6f61a.jpg",                  "FAA flight school training USA aircraft",           "landscape", 0),
    ("pay-scale_67aa53c9.jpg",                   "pilot pay scale salary career progression",         "landscape", 0),
    ("pilot-age_9d4c2b8e.jpg",                   "mature pilot older aviation career age",            "landscape", 0),
    ("pilot-briefing_76df7230.jpg",              "pilot briefing pre-flight planning map",            "landscape", 0),
    ("pilot-cv_9d4c2b8e.jpg",                    "pilot CV resume professional aviation career",      "landscape", 0),
    ("pilot-cv_e66193e2.jpg",                    "pilot resume CV writing professional aviation",     "landscape", 1),
    ("pilot-eyesight_70ef5247.jpg",              "pilot eye test vision examination aviation medical","landscape", 0),
    ("pilot-logbook_8afa8322.jpg",               "pilot logbook flying hours aviation record",        "landscape", 0),
    ("pilot-over-40-usa_35140e0e.jpg",           "mature pilot over 40 aviation career USA",          "landscape", 0),
    ("pilot-over-40_9d4c2b8e.jpg",               "pilot over 40 mature career aviation",              "landscape", 1),
    ("pilot-over-40_fbd1e435.jpg",               "older pilot aviation career mature professional",   "landscape", 0),
    ("pilot-portrait_0cdc56c7.jpg",              "professional pilot portrait uniform smiling",       "landscape", 0),
    ("pilot-salary-canada_d29f8c11.jpg",         "canadian pilot salary aviation career",             "landscape", 0),
    ("pilot-salary-usa_292045db.jpg",            "american pilot salary career aviation USA",         "landscape", 0),
    ("pilot-shortage_9d4c2b8e.jpg",              "pilot shortage aviation industry hiring",           "landscape", 0),
    ("pilot-training-cost_55d64cb4.jpg",         "pilot training cost finance budget planning",       "landscape", 0),
    ("ppl-guide_ba765335.jpg",                   "private pilot licence PPL training small aircraft", "landscape", 0),
    ("ppl-requirements-usa_64f40a86.jpg",        "PPL private pilot licence requirements USA FAA",    "landscape", 0),
    ("qantas-academy_a1b2c3d4.jpg",              "Qantas aircraft runway Australia aviation",         "landscape", 0),
    ("raf-vs-civilian_9d4c2b8e.jpg",             "RAF military pilot versus civilian aviation career", "landscape", 0),
    ("ready-to-train_9d4c2b8e.jpg",              "pilot ready to train flight school preparation",    "landscape", 0),
    ("ryanair-cadet_432ca710.jpg",               "Ryanair aircraft runway airline cadet",             "landscape", 0),
    ("school-campus_0aa4197f.jpg",               "flight school campus training facility aviation",   "landscape", 0),
    ("sim-assessment_9d4c2b8e.jpg",              "flight simulator assessment aviation test",         "landscape", 0),
    ("simulator-assessment_08bb00b0.jpg",        "flight simulator cockpit assessment training",      "landscape", 1),
    ("small-aircraft_e3c4488b.jpg",              "small training aircraft runway aviation propeller",  "landscape", 0),
    ("solo-flight_ac4d5964.jpg",                 "student pilot solo flight small aircraft",          "landscape", 0),
    ("training-aircraft_09ae6a9b.jpg",           "training aircraft propeller flight school runway",  "landscape", 0),
    ("training-aircraft_52514b39.jpg",           "flight training aircraft runway propeller",         "landscape", 1),
    ("training-costs-usa_3d276236.jpg",          "pilot training costs USA finance budget",           "landscape", 0),
    ("training-costs_9d4c2b8e.jpg",              "pilot training costs finance budget UK",            "landscape", 0),
    ("training-costs_b1a2c3d4.jpg",              "aviation training costs planning finance",          "landscape", 1),
    ("training-finance-2026_cc42618a.jpg",       "pilot training finance loan 2026 aviation",         "landscape", 0),
    ("training-finance-loan_7be38da5.jpg",       "aviation training finance loan student",            "landscape", 1),
    ("training-routes-comparison_206bd458.png",  "pilot training routes comparison aviation",         "landscape", 0),
    ("training-timeline_9baef553.jpg",           "pilot training timeline progression aviation",      "landscape", 0),
    ("training-timeline_9d4c2b8e.jpg",           "aviation training timeline schedule planning",      "landscape", 1),
    ("tui-cadet_c1d2e3f4.jpg",                   "TUI airline aircraft cadet programme aviation",     "landscape", 0),
    ("type-rating-usa_492628c9.jpg",             "type rating training simulator airline USA",        "landscape", 0),
    ("type-rating_e790e1aa.jpg",                 "type rating training simulator airline cockpit",    "landscape", 1),
    ("uk-salary-2026_12c4d065.jpg",              "UK pilot salary 2026 aviation career British",      "landscape", 0),
    ("uk-school_2515f292.jpg",                   "UK flight school training aircraft British",        "landscape", 1),
    ("united-aviate_9d4c2b8e.jpg",               "United Airlines aircraft runway aviation",          "landscape", 0),
    ("us-pilot-career_eda6a21f.jpg",             "american pilot career aviation USA professional",   "landscape", 0),
    ("usa-school_36756c90.jpg",                  "USA flight school training aircraft American",      "landscape", 1),
    ("wizzair-cadet_8bbabaaa.jpg",               "Wizz Air aircraft runway airline aviation",         "landscape", 0),
    ("women-aviation_9d4c2b8e.jpg",              "woman female pilot aviation cockpit professional",  "landscape", 0),
    ("women-aviation_a1ed518f.jpg",              "female pilot woman aviation career professional",   "landscape", 1),
    ("adhd-faa_7b3e9f2a.jpg",                    "ADHD medical assessment health aviation pilot",     "landscape", 0),
]

headers = {"Authorization": PEXELS_API_KEY}
success_count = 0
fail_count = 0
skip_count = 0

for filename, query, orientation, idx in IMAGE_MAP:
    save_path = os.path.join(UPLOADS_DIR, filename)
    
    if os.path.exists(save_path) and os.path.getsize(save_path) > 10000:
        print(f"  SKIP  {filename} (already exists)")
        skip_count += 1
        continue
    
    try:
        resp = requests.get(
            "https://api.pexels.com/v1/search",
            headers=headers,
            params={"query": query, "per_page": max(idx + 1, 3), "orientation": orientation},
            timeout=15
        )
        data = resp.json()
        photos = data.get("photos", [])
        
        if not photos:
            print(f"  FAIL  {filename} — no results for: {query}")
            fail_count += 1
            continue
        
        # Use preferred index, fall back to 0 if not enough results
        photo = photos[min(idx, len(photos) - 1)]
        img_url = photo["src"].get("large2x") or photo["src"].get("large") or photo["src"]["original"]
        
        img_resp = requests.get(img_url, timeout=30)
        img_resp.raise_for_status()
        
        with open(save_path, "wb") as f:
            f.write(img_resp.content)
        
        size_kb = len(img_resp.content) // 1024
        print(f"  OK    {filename} ({size_kb}KB)")
        success_count += 1
        
        # Respect Pexels rate limit (200 req/hour = ~1 req/18s, but we can go faster in bursts)
        time.sleep(0.3)
        
    except Exception as e:
        print(f"  ERR   {filename} — {e}")
        fail_count += 1

print(f"\nDone: {success_count} downloaded, {skip_count} skipped, {fail_count} failed")
