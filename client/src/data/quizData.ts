import { type QuizData } from "@shared/quiz-schema";
import menopauseIcon from "@assets/generated_images/Menopause_topic_illustration_164b2d31.png";
import endometriosisIcon from "@assets/generated_images/Endometriosis_topic_illustration_3dd47ab2.png";
import breastHealthIcon from "@assets/generated_images/Breast_health_topic_illustration_d2d3d11d.png";
import pcosIcon from "@assets/generated_images/PCOS_topic_illustration_7728ab6c.png";

export const quizData: QuizData = {
  topics: [
    {
      id: "menopause",
      title: "The Biology of Menopause",
      description: "Understand the hormonal changes and biological processes during menopause",
      icon: menopauseIcon,
      questionCount: 12,
      estimatedMinutes: 8,
      questions: [
        {
          id: 1,
          questionText: "True or False: Hot flashes are a psychological symptom, not a biological one.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "Fact: It's Biological!",
            text: "Hot flashes are a direct biological response, not in your head! They are caused by the body's 'thermostat' - the hypothalamus (a small region at the base of the brain that regulates body temperature) - becoming more sensitive to slight changes in body temperature. This happens because of declining estrogen (a female hormone) levels, which normally help regulate the hypothalamus. When estrogen drops during menopause, the brain mistakenly thinks the body is overheating and triggers a 'flash' to cool it down, causing sudden sweating and warmth."
          }
        },
        {
          id: 2,
          questionText: "What is the primary biological reason for increased osteoporosis risk after menopause?",
          options: [
            "Decreased calcium intake",
            "A drop in the hormone estrogen",
            "A less active lifestyle",
            "Natural aging of bones"
          ],
          correctAnswer: 1,
          explanation: {
            title: "The Science: Estrogen & Bone Density",
            text: "While all options can contribute, the primary driver is estrogen. Osteoporosis (a condition where bones become weak and brittle) risk increases dramatically after menopause. Estrogen plays a crucial role in regulating bone turnover - the continuous process of breaking down old bone and building new bone. Specifically, estrogen restrains cells called osteoclasts (bone-breaking cells). When estrogen levels drop during menopause, osteoclasts become more active, leading to faster bone loss than bone formation."
          }
        },
        {
          id: 3,
          questionText: "At what average age does menopause typically occur?",
          options: ["35-40 years", "45-50 years", "50-55 years", "60-65 years"],
          correctAnswer: 2,
          explanation: {
            title: "The Timing of Menopause",
            text: "The average age of menopause is 51 years old, typically occurring between 50-55 years. However, perimenopause (the transition period with hormone fluctuations before periods stop completely) can begin several years earlier. Menopause is officially diagnosed after 12 consecutive months without a menstrual period, meaning the ovaries have stopped releasing eggs and producing most estrogen."
          }
        },
        {
          id: 4,
          questionText: "Which hormone decline is primarily responsible for menopausal symptoms?",
          options: ["Testosterone", "Progesterone", "Estrogen", "Cortisol"],
          correctAnswer: 2,
          explanation: {
            title: "Estrogen: The Key Player",
            text: "Estrogen (the primary female sex hormone) decline is the main driver of most menopausal symptoms. This hormone regulates many body systems including temperature control, bone density, skin elasticity, vaginal tissue health, and mood regulation through brain chemistry. When the ovaries produce less estrogen during menopause, these systems are affected, leading to the characteristic symptoms like hot flashes, bone loss, and mood changes."
          }
        },
        {
          id: 5,
          questionText: "True or False: Hormone replacement therapy (HRT) is dangerous for all women.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "Understanding HRT Risks and Benefits",
            text: "HRT (Hormone Replacement Therapy - treatment that supplements the hormones your body no longer produces) is not universally dangerous. Modern research shows that for many women, especially those under 60 or within 10 years of menopause onset, the benefits often outweigh the risks. HRT can include estrogen alone or combined with progesterone (another hormone). The key is individualized treatment based on personal health history, symptom severity, and risk factors. HRT can effectively manage symptoms and protect bone health when appropriately prescribed."
          }
        },
        {
          id: 6,
          questionText: "Sleep disturbances during menopause are primarily caused by:",
          options: [
            "Anxiety and stress",
            "Night sweats disrupting sleep cycles",
            "Changes in melatonin production",
            "Increased caffeine consumption"
          ],
          correctAnswer: 1,
          explanation: {
            title: "The Sleep-Disruption Connection",
            text: "While multiple factors can affect sleep, night sweats (nocturnal hot flashes - episodes of sudden heat and sweating during sleep) are a primary biological cause of sleep disruption during menopause. These sudden temperature spikes can wake women multiple times per night, preventing deep, restorative sleep. The estrogen decline also affects the hypothalamus, which regulates temperature during sleep cycles, making the body more sensitive to temperature changes at night."
          }
        },
        {
          id: 7,
          questionText: "Mood changes during menopause are linked to:",
          options: [
            "Simply getting older",
            "Fluctuating hormone levels affecting brain chemistry",
            "Social expectations about aging",
            "Vitamin deficiencies"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Hormones and Brain Chemistry",
            text: "Estrogen influences the production and function of neurotransmitters (chemical messengers in the brain) like serotonin and dopamine, which regulate mood, motivation, and pleasure. During the menopausal transition, erratic hormone fluctuations - not steady levels but up-and-down changes - can lead to mood swings, irritability, and increased risk of depression. This is a biological phenomenon driven by brain chemistry changes, not just a psychological response to aging."
          }
        },
        {
          id: 8,
          questionText: "Which of these is NOT a common physical symptom of menopause?",
          options: [
            "Vaginal dryness",
            "Hair loss",
            "Increased height",
            "Joint pain"
          ],
          correctAnswer: 2,
          explanation: {
            title: "Common vs. Uncommon Symptoms",
            text: "Increased height is not a symptom of menopause. In fact, women may actually lose some height due to bone density loss and spinal compression (the vertebrae in the spine compressing closer together). Vaginal dryness (reduced moisture and lubrication), hair thinning on the scalp, and joint pain (aching or stiffness in knees, hips, fingers) are all common symptoms related to declining estrogen levels affecting various body tissues and collagen production."
          }
        },
        {
          id: 9,
          questionText: "Perimenopause is the term for:",
          options: [
            "The first year after menopause",
            "The transition period leading up to menopause",
            "Menopause occurring before age 40",
            "Surgical removal of the ovaries"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Understanding Perimenopause",
            text: "Perimenopause (peri- means 'around' or 'near') is the transitional phase before menopause when hormone levels begin to fluctuate and decline, but periods haven't completely stopped. This period can last 4-10 years and is characterized by irregular periods (sometimes closer together, sometimes farther apart) and varying menopausal symptoms. During perimenopause, you can still get pregnant since ovulation (egg release) can still occur irregularly, even though fertility is declining."
          }
        },
        {
          id: 10,
          questionText: "Weight gain during menopause is often related to:",
          options: [
            "Eating more food than before",
            "Changes in metabolism and fat distribution due to hormonal shifts",
            "Less physical activity only",
            "Water retention from salt"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Metabolism and Hormones",
            text: "Declining estrogen levels affect how the body stores fat, shifting it from hips and thighs to the abdomen (creating an 'apple shape' instead of 'pear shape'). Additionally, metabolism (the rate at which your body burns calories) naturally slows with age, and muscle mass (which burns more calories than fat) decreases. Both of these reduce overall calorie burning. While lifestyle factors like diet and exercise matter, the hormonal changes during menopause create a biological tendency toward weight gain and body composition changes."
          }
        },
        {
          id: 11,
          questionText: "True or False: After menopause, women no longer need to use contraception.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "Contraception After Menopause",
            text: "False - but with nuance. Women are considered menopausal after 12 consecutive months without a period. However, during perimenopause (the transition years before this point), ovulation can still occur irregularly, meaning pregnancy is still possible even with irregular periods. Contraception (birth control) should be continued until menopause is confirmed - typically one year after the last period for women over 50, or two years after the last period for women under 50."
          }
        },
        {
          id: 12,
          questionText: "Cardiovascular disease risk increases after menopause because:",
          options: [
            "Women exercise less after menopause",
            "Estrogen previously provided protective effects on heart health",
            "Menopause causes high blood pressure directly",
            "Age is the only factor"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Estrogen and Heart Health",
            text: "Before menopause, estrogen helps keep blood vessels flexible (able to expand and contract easily) and improves the balance of HDL (high-density lipoprotein - 'good' cholesterol that removes harmful cholesterol) and LDL (low-density lipoprotein - 'bad' cholesterol that can clog arteries). When estrogen levels drop, women lose this protective cardiovascular effect, leading to increased risk of heart disease, high blood pressure, and high cholesterol. This is why heart disease becomes the leading cause of death in women after menopause."
          }
        }
      ]
    },
    {
      id: "endometriosis",
      title: "Understanding Endometriosis",
      description: "Learn about this common yet often misunderstood gynecological condition",
      icon: endometriosisIcon,
      questionCount: 11,
      estimatedMinutes: 8,
      questions: [
        {
          id: 1,
          questionText: "What is endometriosis?",
          options: [
            "Cancer of the uterus",
            "Tissue similar to uterine lining growing outside the uterus",
            "Infection of the reproductive organs",
            "Abnormal thickening of the uterine wall"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Defining Endometriosis",
            text: "Endometriosis is a condition where tissue similar to the endometrium (the tissue lining the inside of the uterus that normally sheds during menstruation) grows outside the uterus where it doesn't belong. This tissue can grow on the ovaries (organs that produce eggs), fallopian tubes (tubes that carry eggs to the uterus), outer surface of the bladder, intestines, and other areas in the pelvis. Like the normal uterine lining, this misplaced tissue responds to monthly hormonal changes during the menstrual cycle, thickening and breaking down, causing inflammation and pain."
          }
        },
        {
          id: 2,
          questionText: "Why does endometriosis cause pain?",
          options: [
            "The misplaced tissue has no way to exit the body during menstruation",
            "It blocks blood flow to organs",
            "It causes nerve damage",
            "It creates tumors"
          ],
          correctAnswer: 0,
          explanation: {
            title: "The Pain Mechanism",
            text: "During menstruation (your period), endometrial tissue normally exits the uterus through the vagina. However, endometrial-like tissue growing outside the uterus has no way to leave the body. Each month, this tissue bleeds and breaks down in place - trapped inside your pelvic cavity. This causes inflammation (swelling and irritation), internal bleeding, and eventual scarring (adhesions - bands of scar tissue that can make organs stick together) of surrounding tissues. This trapped blood and resulting inflammation is what causes the characteristic pelvic pain, especially during periods."
          }
        },
        {
          id: 3,
          questionText: "True or False: Endometriosis can cause infertility.",
          options: ["True", "False"],
          correctAnswer: 0,
          explanation: {
            title: "Endometriosis and Fertility",
            text: "True. Endometriosis is found in 30-50% of women experiencing infertility (difficulty getting pregnant). It can affect fertility through multiple mechanisms: causing chronic inflammation that damages eggs or sperm, creating scarring (adhesions) that physically blocks fallopian tubes (the tubes that carry eggs from ovaries to uterus), or distorting pelvic anatomy so eggs can't reach the tubes. However, many women with endometriosis can still conceive naturally, and treatment options including surgery and assisted reproductive technology can help."
          }
        },
        {
          id: 4,
          questionText: "The average time from symptom onset to diagnosis of endometriosis is:",
          options: [
            "3-6 months",
            "1-2 years",
            "7-10 years",
            "Over 15 years"
          ],
          correctAnswer: 2,
          explanation: {
            title: "The Diagnosis Delay",
            text: "On average, it takes 7-10 years from when symptoms first appear to receive an endometriosis diagnosis. This shocking delay occurs for several reasons: symptoms like severe period pain are often dismissed as 'normal,' many doctors lack awareness about the condition, the only definitive diagnosis requires surgery, and women's pain is historically undertreated in medicine. This delay means many women suffer for years before getting appropriate care."
          }
        },
        {
          id: 5,
          questionText: "Which hormone primarily drives endometriosis growth?",
          options: ["Testosterone", "Progesterone", "Cortisol", "Estrogen"],
          correctAnswer: 3,
          explanation: {
            title: "The Role of Estrogen",
            text: "Estrogen (the primary female sex hormone) is the main hormone that promotes the growth and activity of endometrial tissue, both inside and outside the uterus. This is why endometriosis symptoms often improve during pregnancy (when progesterone is high and ovulation/periods stop) and after menopause (when estrogen production dramatically decreases). Many endometriosis treatments work by reducing estrogen levels or blocking estrogen's effects on the misplaced tissue."
          }
        },
        {
          id: 6,
          questionText: "The only definitive way to diagnose endometriosis is through:",
          options: [
            "Blood test",
            "Ultrasound",
            "Laparoscopic surgery",
            "Physical examination"
          ],
          correctAnswer: 2,
          explanation: {
            title: "Surgical Diagnosis",
            text: "Laparoscopic surgery (a minimally invasive surgical procedure where a thin camera is inserted through a small incision in the abdomen) with tissue biopsy (taking a small sample to examine under a microscope) is currently the only definitive way to diagnose endometriosis. During this procedure, doctors can directly visualize the pelvic organs and identify endometrial implants (patches of endometrial-like tissue). While imaging like ultrasound or MRI can suggest endometriosis, visual confirmation and tissue analysis are required for a definitive diagnosis."
          }
        },
        {
          id: 7,
          questionText: "True or False: Hysterectomy (removing the uterus) always cures endometriosis.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "Hysterectomy Is Not a Guaranteed Cure",
            text: "False. A hysterectomy (surgical removal of the uterus/womb) does not guarantee cure because endometriosis by definition involves tissue growing outside the uterus. Unless all endometrial implants throughout the pelvic cavity are found and removed during surgery (which is often technically difficult), symptoms can persist even without a uterus. Additionally, if the ovaries are left in place, they continue producing estrogen, which can stimulate any remaining endometrial tissue to grow and cause symptoms."
          }
        },
        {
          id: 8,
          questionText: "Endometriosis is classified into stages based on:",
          options: [
            "How much pain the patient experiences",
            "The extent, location, and depth of endometrial implants",
            "How long the patient has had symptoms",
            "The patient's age"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Staging Endometriosis",
            text: "Endometriosis is staged from I (minimal) to IV (severe) based on surgical findings: the location, extent, and depth of endometrial implants (patches of tissue), presence and severity of adhesions (scar tissue bands connecting organs), and involvement of ovaries (including endometriomas - cysts filled with old blood, called 'chocolate cysts'). Importantly, the stage doesn't always correlate with pain levels - someone with Stage I can have debilitating pain, while someone with Stage IV may have minimal symptoms."
          }
        },
        {
          id: 9,
          questionText: "Common locations where endometriosis can grow include all EXCEPT:",
          options: [
            "Ovaries and fallopian tubes",
            "Bladder and bowel",
            "Brain and spinal cord",
            "Pelvic ligaments and peritoneum"
          ],
          correctAnswer: 2,
          explanation: {
            title: "Where Endometriosis Grows",
            text: "While extremely rare cases of endometriosis in distant sites like lungs have been reported in medical literature, it does not typically grow in the brain or spinal cord. The most common sites are within the pelvic cavity: ovaries, fallopian tubes, outer surfaces of the bladder and bowel, pelvic ligaments (tissues supporting pelvic organs), and the peritoneum (the membrane lining the pelvic cavity). The ovaries are the most frequently affected organs, often developing endometriomas (blood-filled cysts)."
          }
        },
        {
          id: 10,
          questionText: "Birth control pills can help manage endometriosis by:",
          options: [
            "Curing the disease permanently",
            "Suppressing ovulation and reducing estrogen levels",
            "Removing existing endometrial implants",
            "Increasing fertility"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Hormonal Management",
            text: "Birth control pills (oral contraceptives containing synthetic versions of estrogen and/or progesterone) help manage endometriosis by suppressing ovulation (preventing the monthly release of an egg) and maintaining steady, lower hormone levels. This reduces the hormonal fluctuations that stimulate endometrial tissue to grow, thicken, and shed each month, thereby decreasing inflammation and pain. However, this is symptom management, not a cure - endometriosis tissue remains and typically becomes active again when hormonal treatment is stopped."
          }
        },
        {
          id: 11,
          questionText: "True or False: Endometriosis only affects the reproductive system.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "Beyond Reproductive Health",
            text: "False. Endometriosis can affect multiple body systems beyond reproduction. It commonly involves the bladder (causing dysuria - painful urination, or urgency), bowel (causing painful bowel movements, bloating, constipation, or diarrhea, especially during periods), and can cause chronic fatigue (persistent tiredness). Some women also experience immune system dysfunction and increased risk of certain autoimmune conditions (diseases where the immune system attacks the body). It's increasingly understood as a systemic inflammatory condition (affecting the whole body), not just a localized reproductive issue."
          }
        }
      ]
    },
    {
      id: "breast-health",
      title: "Breast Health & Awareness",
      description: "Essential knowledge about breast health, screening, and cancer prevention",
      icon: breastHealthIcon,
      questionCount: 10,
      estimatedMinutes: 7,
      questions: [
        {
          id: 1,
          questionText: "At what age should most women begin annual mammogram screening?",
          options: ["30 years", "40 years", "50 years", "60 years"],
          correctAnswer: 2,
          explanation: {
            title: "Screening Guidelines",
            text: "Most major medical organizations recommend starting annual mammogram screening (an X-ray examination of the breast to detect tumors too small to feel) at age 50 for average-risk women, though some organizations suggest beginning at 40. A mammogram compresses the breast between plates to take detailed images that can reveal suspicious areas. Women with higher risk factors (family history of breast cancer, genetic mutations like BRCA) should discuss earlier and more frequent screening with their healthcare provider. The key is balancing early detection benefits with potential harms from false positives (abnormal results that turn out not to be cancer)."
          }
        },
        {
          id: 2,
          questionText: "What percentage of breast cancers occur in women with no family history?",
          options: ["About 10%", "About 35%", "About 55%", "About 85%"],
          correctAnswer: 3,
          explanation: {
            title: "The Family History Myth",
            text: "Approximately 85% of breast cancers occur in women with no family history of the disease. While having a first-degree relative (mother, sister, daughter) with breast cancer does increase individual risk, the vast majority of breast cancer cases occur in women without this risk factor. This is why regular screening is important for all women, not just those with family history. Most breast cancer is related to age and gender, not inherited genetics."
          }
        },
        {
          id: 3,
          questionText: "Dense breast tissue is important to know about because it:",
          options: [
            "Increases breast cancer risk and can hide tumors on mammograms",
            "Causes more pain during mammograms",
            "Indicates vitamin deficiency",
            "Always leads to breast cancer"
          ],
          correctAnswer: 0,
          explanation: {
            title: "Understanding Breast Density",
            text: "Dense breast tissue (breasts with more glandular and fibrous connective tissue relative to fatty tissue) matters for two important reasons: (1) On a mammogram (breast X-ray), dense tissue appears white, and tumors also appear white, making it like 'finding a snowball in a snowstorm' - detection becomes more difficult. (2) Women with dense breasts have a moderately increased risk of developing breast cancer. Many states now require mammogram reports to inform women about their breast density. Additional screening methods like ultrasound (sound waves to create images) or MRI (magnetic resonance imaging) may be recommended for women with very dense breasts."
          }
        },
        {
          id: 4,
          questionText: "True or False: Most breast lumps are cancerous.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "Most Lumps Are Benign",
            text: "False. Approximately 80% of breast lumps are benign (non-cancerous). Common benign causes include cysts (fluid-filled sacs), fibroadenomas (solid, smooth, rubbery lumps made of fibrous and glandular tissue, most common in young women), and normal fibrocystic changes (lumpiness related to hormonal fluctuations). However, any new lump or breast change should be promptly evaluated by a healthcare provider, as clinical examination (physical exam by a doctor) and often imaging (mammogram or ultrasound) are needed to determine if a lump requires biopsy (removing a tissue sample to examine under a microscope)."
          }
        },
        {
          id: 5,
          questionText: "The BRCA1 and BRCA2 genes are important because mutations in these genes:",
          options: [
            "Guarantee you will develop breast cancer",
            "Significantly increase breast and ovarian cancer risk",
            "Protect against breast cancer",
            "Only affect men's cancer risk"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Understanding BRCA Mutations",
            text: "BRCA1 and BRCA2 (BReast CAncer gene 1 and 2) are tumor suppressor genes that normally help repair damaged DNA in cells. Mutations (harmful changes) in these genes significantly increase the risk of breast cancer (up to 70% lifetime risk vs. 12% average risk) and ovarian cancer (up to 44% vs. 1-2% average risk). However, having a BRCA mutation doesn't guarantee cancer development - it means much higher risk, not certainty. Women with BRCA mutations have options including enhanced screening (more frequent mammograms, MRIs starting younger), preventive medications (like tamoxifen), or risk-reducing surgery (removing breasts and/or ovaries before cancer develops)."
          }
        },
        {
          id: 6,
          questionText: "Lifestyle factors that can reduce breast cancer risk include:",
          options: [
            "Regular exercise and maintaining healthy weight",
            "Avoiding all dairy products",
            "Taking vitamin supplements only",
            "Wearing supportive bras"
          ],
          correctAnswer: 0,
          explanation: {
            title: "Modifiable Risk Factors",
            text: "Regular physical activity (at least 150 minutes moderate exercise per week) and maintaining a healthy weight, especially after menopause, can reduce breast cancer risk by 10-20%. This works because fat tissue (adipose tissue) produces estrogen, and excess estrogen exposure over a lifetime increases cancer risk. Obesity after menopause is a significant modifiable risk factor. Other beneficial lifestyle factors include limiting alcohol consumption (even moderate drinking increases risk), breastfeeding if possible (reduces lifetime estrogen exposure), and avoiding unnecessary hormone therapy. While these factors don't eliminate risk, they meaningfully reduce it."
          }
        },
        {
          id: 7,
          questionText: "Breast self-exams should be performed:",
          options: [
            "Daily",
            "Once a month, ideally a few days after your period ends",
            "Only if you notice symptoms",
            "They are no longer recommended"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Breast Self-Awareness",
            text: "While formal structured monthly breast self-exams (BSE) are no longer mandated by all medical organizations, breast self-awareness (being familiar with your normal breast appearance and feel) is strongly encouraged. Women should know what's normal for their own breasts. The best time to examine breasts is a few days after your period ends, when breasts are least tender, swollen, and lumpy from hormonal changes. Look for lumps, dimpling, nipple changes, or skin changes. Any new or persistent changes should be reported to a healthcare provider promptly - don't wait for your annual exam."
          }
        },
        {
          id: 8,
          questionText: "Which of these is a known risk factor for breast cancer?",
          options: [
            "Early menopause (before age 45)",
            "Late onset of menstruation (after age 15)",
            "Never having children or having first child after age 30",
            "Short lifetime exposure to estrogen"
          ],
          correctAnswer: 2,
          explanation: {
            title: "Reproductive Risk Factors",
            text: "Never having children (nulliparity) or having a first child after age 30 increases breast cancer risk. This is related to cumulative estrogen exposure over a lifetime - pregnancy and breastfeeding give the breasts a 'break' from monthly estrogen exposure and mature breast cells, making them less susceptible to cancer. Conversely, early menstruation (before age 12), late menopause (after age 55), and long-term hormone replacement therapy all increase risk by extending lifetime estrogen exposure. Each year of delayed first pregnancy after age 20 slightly increases risk."
          }
        },
        {
          id: 9,
          questionText: "If breast cancer is detected early (Stage I), the 5-year survival rate is approximately:",
          options: ["50%", "70%", "90%", "99%"],
          correctAnswer: 3,
          explanation: {
            title: "The Importance of Early Detection",
            text: "When breast cancer is detected at Stage I (small tumor less than 2cm, no lymph node involvement, cancer hasn't spread beyond the breast), the 5-year survival rate (the percentage of people alive 5 years after diagnosis) is nearly 99%. This dramatically illustrates why screening mammograms and prompt evaluation of any breast changes are so crucial. Survival rates decrease progressively as cancer advances to later stages: Stage II (80-90%), Stage III (70-75%), Stage IV or metastatic (22%). Early detection truly saves lives."
          }
        },
        {
          id: 10,
          questionText: "True or False: Men cannot develop breast cancer.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "Male Breast Cancer",
            text: "False. Men can and do develop breast cancer, though it's rare (less than 1% of all breast cancers, about 2,600 cases annually in the U.S.). Men have breast tissue (though less than women) and can develop breast cancer, particularly if they have BRCA2 mutations (rarer BRCA1), family history, conditions causing increased estrogen levels (like liver disease or obesity), or radiation exposure to the chest. Male breast cancer is often diagnosed at later stages because awareness is low and men don't expect it. Any breast lump, skin changes, or nipple discharge in men should be evaluated promptly."
          }
        }
      ]
    },
    {
      id: "pcos",
      title: "PCOS: Polycystic Ovary Syndrome",
      description: "Understanding this common hormonal disorder affecting reproductive-age women",
      icon: pcosIcon,
      questionCount: 11,
      estimatedMinutes: 8,
      questions: [
        {
          id: 1,
          questionText: "PCOS is primarily characterized by:",
          options: [
            "Multiple ovarian cysts only",
            "Hormonal imbalance affecting ovulation, periods, and metabolism",
            "Severe menstrual pain",
            "Early menopause"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Defining PCOS",
            text: "Despite its name, PCOS (Polycystic Ovary Syndrome) is not primarily about cysts. It's a complex hormonal and metabolic disorder characterized by irregular or absent periods, excess androgens (male hormones like testosterone), and often metabolic issues like insulin resistance (when cells don't respond well to insulin). The 'cysts' visible on ultrasound are actually many small follicles (fluid-filled sacs containing immature eggs) that don't develop and release properly due to hormonal imbalances. PCOS affects approximately 10% (1 in 10) of reproductive-age women, making it one of the most common hormonal disorders."
          }
        },
        {
          id: 2,
          questionText: "Women with PCOS often have elevated levels of which hormone?",
          options: ["Estrogen", "Progesterone", "Insulin", "Testosterone"],
          correctAnswer: 3,
          explanation: {
            title: "Androgen Excess in PCOS",
            text: "Women with PCOS typically have elevated levels of androgens (male hormones), particularly testosterone. While all women produce small amounts of testosterone, PCOS causes overproduction. This hormonal imbalance leads to characteristic symptoms like hirsutism (excess facial and body hair in male-pattern areas like chin, upper lip, chest, and abdomen), acne (particularly along jawline and neck), and male-pattern scalp hair thinning or loss at the crown. The androgen excess also interferes with normal follicle development and ovulation (egg release), contributing to irregular periods and fertility challenges."
          }
        },
        {
          id: 3,
          questionText: "True or False: Insulin resistance plays a key role in PCOS.",
          options: ["True", "False"],
          correctAnswer: 0,
          explanation: {
            title: "The Insulin Connection",
            text: "True. Insulin resistance (when the body's cells don't respond properly to insulin, a hormone that helps sugar enter cells for energy) is present in 70-80% of women with PCOS, including many lean women. When cells are insulin-resistant, the pancreas compensates by producing more and more insulin (hyperinsulinemia - high insulin levels in blood). High insulin levels directly stimulate the ovaries to produce excess androgens (male hormones), worsening PCOS symptoms and creating a vicious cycle. This is why lifestyle changes improving insulin sensitivity (diet focused on low glycemic foods, regular exercise, weight loss if overweight) can significantly help manage PCOS and restore normal cycles."
          }
        },
        {
          id: 4,
          questionText: "Women with PCOS have an increased risk of developing:",
          options: [
            "Osteoporosis",
            "Type 2 diabetes",
            "Alzheimer's disease",
            "Lung disease"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Long-term Health Risks",
            text: "Due to insulin resistance, women with PCOS have a significantly increased risk of developing type 2 diabetes (a condition where blood sugar levels are too high) - up to 50% will develop prediabetes or diabetes by age 40. They also face higher risks of cardiovascular disease (heart attacks and strokes), high blood pressure (hypertension), high cholesterol and triglycerides (dyslipidemia), metabolic syndrome (a cluster of conditions increasing heart disease risk), non-alcoholic fatty liver disease, and endometrial cancer (cancer of the uterine lining, due to unopposed estrogen from not ovulating regularly). Regular screening for these conditions and preventive care are crucial."
          }
        },
        {
          id: 5,
          questionText: "PCOS can affect fertility because:",
          options: [
            "It damages the fallopian tubes",
            "It prevents ovulation from occurring regularly",
            "It causes premature menopause",
            "It reduces egg quality only"
          ],
          correctAnswer: 1,
          explanation: {
            title: "PCOS and Ovulation",
            text: "The hormonal imbalances in PCOS prevent the normal monthly development and release of mature eggs, a process called ovulation. Without regular ovulation - called anovulation (no ovulation) or oligo-ovulation (infrequent ovulation) - pregnancy becomes difficult to achieve naturally because there's no egg available for sperm to fertilize most months. However, PCOS-related infertility is often very treatable with medications that stimulate ovulation (like clomiphene or letrozole), lifestyle modifications that improve insulin sensitivity, or assisted reproductive technologies like IVF. Many women with PCOS successfully conceive with treatment."
          }
        },
        {
          id: 6,
          questionText: "First-line treatment for PCOS often includes:",
          options: [
            "Immediate surgery",
            "Lifestyle modifications: diet, exercise, weight management",
            "Chemotherapy",
            "Antibiotics"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Lifestyle as Medicine",
            text: "For most women with PCOS, especially those who are overweight or obese, lifestyle modifications are the first-line (initial, most recommended) treatment. Even modest weight loss of 5-10% of body weight can improve insulin sensitivity (how well cells respond to insulin), reduce insulin and androgen levels, restore more regular ovulation and periods, improve fertility, and reduce long-term health risks. Effective lifestyle changes include a lower glycemic index diet (foods that don't spike blood sugar rapidly), regular exercise (both cardio and strength training), adequate sleep, and stress management. These approaches address PCOS at its metabolic root cause and are often combined with medications when needed."
          }
        },
        {
          id: 7,
          questionText: "To diagnose PCOS, doctors typically look for at least 2 of these 3 criteria:",
          options: [
            "Irregular periods, high androgens, polycystic ovaries on ultrasound",
            "High blood pressure, diabetes, obesity",
            "Severe pain, heavy bleeding, anemia",
            "Hot flashes, mood swings, insomnia"
          ],
          correctAnswer: 0,
          explanation: {
            title: "The Rotterdam Criteria",
            text: "PCOS diagnosis typically requires meeting at least 2 of 3 criteria, known as the Rotterdam criteria: (1) Irregular or absent periods (oligomenorrhea or amenorrhea) indicating lack of regular ovulation, (2) Clinical signs (visible symptoms like excess hair growth or acne) OR biochemical signs (blood test showing elevated androgens like testosterone) of excess androgens (hyperandrogenism), (3) Polycystic ovaries seen on pelvic ultrasound (12 or more small follicles per ovary, and/or enlarged ovary volume). Importantly, other conditions that can cause similar symptoms (like thyroid disorders, high prolactin, or adrenal problems) must be ruled out first through blood tests before confirming PCOS."
          }
        },
        {
          id: 8,
          questionText: "Metformin is sometimes prescribed for PCOS because it:",
          options: [
            "Is a birth control pill",
            "Improves insulin sensitivity and can help restore ovulation",
            "Removes ovarian cysts",
            "Increases estrogen levels"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Metformin's Role in PCOS",
            text: "Metformin is a diabetes medication (usually used for type 2 diabetes) that improves how the body's cells respond to insulin - called improving insulin sensitivity. In PCOS, reducing insulin resistance with metformin can help lower elevated insulin levels, which in turn reduces androgen (male hormone) production by the ovaries. This can lead to more regular menstrual periods, improved ovulation rates, reduced testosterone levels, and metabolic benefits like better blood sugar control and modest weight loss. It's particularly helpful for women with PCOS who have documented insulin resistance, prediabetes, or are trying to conceive. However, it works best when combined with lifestyle changes."
          }
        },
        {
          id: 9,
          questionText: "True or False: All women with PCOS are overweight.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "PCOS Body Diversity",
            text: "False. While 60-70% of women with PCOS struggle with weight gain and obesity (partly due to insulin resistance making weight loss difficult), approximately 20-30% of women with PCOS are of normal weight or lean. PCOS is fundamentally a hormonal and metabolic disorder that can affect women across all body types and weights. Lean women with PCOS can still have insulin resistance, elevated androgens, irregular cycles, and fertility challenges. However, excess weight does worsen PCOS symptoms and insulin resistance, which is why weight management is strongly recommended when applicable - but it's not the cause of PCOS, and thin women can definitely have PCOS."
          }
        },
        {
          id: 10,
          questionText: "The 'polycystic' in PCOS refers to:",
          options: [
            "Dangerous cysts that need to be removed",
            "Multiple small follicles visible on the ovaries via ultrasound",
            "Cysts throughout the entire body",
            "Cancerous growths"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Understanding 'Polycystic'",
            text: "The term 'polycystic' is actually misleading and confusing - these aren't true cysts requiring removal or treatment. They're multiple small follicles (fluid-filled sacs, each containing an immature egg) - typically 12 or more in each ovary - that appear like a 'string of pearls' on ultrasound imaging. In PCOS, hormonal imbalances prevent these follicles from fully maturing and releasing eggs (ovulation). Instead, they accumulate on the ovaries' outer edge, creating the characteristic polycystic appearance. These follicles are not harmful themselves, not cancerous, and don't need to be removed - they're simply a sign of the underlying hormonal problem preventing normal ovulation."
          }
        },
        {
          id: 11,
          questionText: "Women with PCOS should have regular screening for:",
          options: [
            "Lung function only",
            "Blood sugar levels and cholesterol",
            "Bone density only",
            "Kidney function only"
          ],
          correctAnswer: 1,
          explanation: {
            title: "Monitoring Metabolic Health",
            text: "Due to increased risks of metabolic and cardiovascular problems, women with PCOS should have regular screening for blood sugar levels through fasting glucose and oral glucose tolerance test or HbA1c (a test showing average blood sugar over 3 months) to catch prediabetes or diabetes early, lipid panel (cholesterol and triglycerides - fats in blood), blood pressure (checking for hypertension), and overall cardiovascular risk assessment. Screening frequency depends on individual risk factors: higher-risk women (obese, family history of diabetes, impaired glucose already) may need annual testing, while lower-risk women may be screened every 2-3 years. Early detection and management of these conditions through lifestyle changes and medications can prevent serious complications like heart attacks, strokes, and diabetic complications."
          }
        }
      ]
    }
  ]
};
