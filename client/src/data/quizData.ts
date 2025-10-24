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
      questionCount: 8,
      estimatedMinutes: 5,
      questions: [
        {
          id: 1,
          questionText: "True or False: Hot flashes are a psychological symptom, not a biological one.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "Fact: It's Biological!",
            text: "Hot flashes are a direct biological response. They are caused by the body's 'thermostat' (the hypothalamus in the brain) becoming more sensitive to slight changes in body temperature. This happens because of declining estrogen levels, which help regulate the hypothalamus. The brain mistakenly thinks the body is overheating and triggers a 'flash' to cool it down."
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
            text: "While all options can contribute, the primary driver is estrogen. Estrogen plays a crucial role in regulating bone turnover (the process of breaking down old bone and building new bone). Specifically, it restrains the cells that break down bone (osteoclasts). When estrogen levels drop during menopause, these cells become more active, leading to faster bone loss."
          }
        },
        {
          id: 3,
          questionText: "At what average age does menopause typically occur?",
          options: ["35-40 years", "45-50 years", "50-55 years", "60-65 years"],
          correctAnswer: 2,
          explanation: {
            title: "The Timing of Menopause",
            text: "The average age of menopause is 51 years old, typically occurring between 50-55 years. However, perimenopause (the transition period) can begin several years earlier. Menopause is officially diagnosed after 12 consecutive months without a menstrual period."
          }
        },
        {
          id: 4,
          questionText: "Which hormone decline is primarily responsible for menopausal symptoms?",
          options: ["Testosterone", "Progesterone", "Estrogen", "Cortisol"],
          correctAnswer: 2,
          explanation: {
            title: "Estrogen: The Key Player",
            text: "Estrogen decline is the primary driver of most menopausal symptoms. This hormone regulates many body systems including temperature control, bone density, skin elasticity, and mood regulation. When ovaries produce less estrogen during menopause, these systems are affected, leading to the characteristic symptoms."
          }
        },
        {
          id: 5,
          questionText: "True or False: Hormone replacement therapy (HRT) is dangerous for all women.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "Understanding HRT Risks and Benefits",
            text: "HRT is not universally dangerous. Modern research shows that for many women, especially those under 60 or within 10 years of menopause onset, the benefits often outweigh the risks. The key is individualized treatment based on personal health history, symptom severity, and risk factors. HRT can effectively manage symptoms and protect bone health when appropriately prescribed."
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
            text: "While multiple factors can affect sleep, night sweats (nocturnal hot flashes) are a primary biological cause of sleep disruption during menopause. These sudden temperature spikes can wake women multiple times per night, preventing deep, restorative sleep. The estrogen decline also affects temperature regulation during sleep cycles."
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
            text: "Estrogen influences the production and function of neurotransmitters like serotonin and dopamine, which regulate mood. During the menopausal transition, erratic hormone fluctuations can lead to mood swings, irritability, and increased risk of depression. This is a biological phenomenon, not just a psychological response to aging."
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
            text: "Increased height is not a symptom of menopause. In fact, women may actually lose some height due to bone density loss and spinal compression. Vaginal dryness, hair thinning (not necessarily loss), and joint pain are all common symptoms related to declining estrogen levels affecting various body tissues."
          }
        }
      ]
    },
    {
      id: "endometriosis",
      title: "Understanding Endometriosis",
      description: "Learn about this common yet often misunderstood gynecological condition",
      icon: endometriosisIcon,
      questionCount: 7,
      estimatedMinutes: 5,
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
            text: "Endometriosis is a condition where tissue similar to the endometrium (the lining of the uterus) grows outside the uterus. This tissue can grow on the ovaries, fallopian tubes, bladder, intestines, and other areas. Like the uterine lining, this tissue responds to hormonal changes during the menstrual cycle, causing inflammation and pain."
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
            text: "During menstruation, endometrial tissue normally exits through the vagina. However, endometrial-like tissue growing outside the uterus has no way to leave the body. It bleeds and breaks down in place, causing inflammation, irritation, and scarring of surrounding tissues. This trapped blood and resulting inflammation is what causes the characteristic pain."
          }
        },
        {
          id: 3,
          questionText: "True or False: Endometriosis can cause infertility.",
          options: ["True", "False"],
          correctAnswer: 0,
          explanation: {
            title: "Endometriosis and Fertility",
            text: "Endometriosis is found in 30-50% of women experiencing infertility. It can affect fertility through multiple mechanisms: causing inflammation that damages eggs or sperm, creating scarring that blocks fallopian tubes, or distorting pelvic anatomy. However, many women with endometriosis can still conceive, especially with treatment."
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
            text: "On average, it takes 7-10 years from when symptoms first appear to receive an endometriosis diagnosis. This delay occurs because symptoms are often dismissed as 'normal period pain,' the condition requires surgical diagnosis, and awareness among both patients and healthcare providers has historically been low."
          }
        },
        {
          id: 5,
          questionText: "Which hormone primarily drives endometriosis growth?",
          options: ["Testosterone", "Progesterone", "Cortisol", "Estrogen"],
          correctAnswer: 3,
          explanation: {
            title: "The Role of Estrogen",
            text: "Estrogen is the primary hormone that promotes the growth of endometrial tissue, both inside and outside the uterus. This is why endometriosis symptoms often improve during pregnancy (when progesterone is high and ovulation stops) and after menopause (when estrogen levels drop). Many treatments work by reducing estrogen levels."
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
            text: "Laparoscopic surgery with tissue biopsy is currently the only definitive way to diagnose endometriosis. During this minimally invasive procedure, a camera is inserted through a small incision to visualize the pelvic organs and identify endometrial implants. While imaging can suggest endometriosis, visual confirmation and tissue analysis are required for definitive diagnosis."
          }
        },
        {
          id: 7,
          questionText: "True or False: Hysterectomy (removing the uterus) always cures endometriosis.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "Hysterectomy Is Not a Guaranteed Cure",
            text: "Removing the uterus does not guarantee cure because endometriosis involves tissue growing outside the uterus. Unless all endometrial implants throughout the pelvic cavity are removed (which is often difficult), symptoms can persist. Additionally, if the ovaries are left in place, they continue producing estrogen, which can stimulate remaining endometrial tissue."
          }
        }
      ]
    },
    {
      id: "breast-health",
      title: "Breast Health & Awareness",
      description: "Essential knowledge about breast health, screening, and cancer prevention",
      icon: breastHealthIcon,
      questionCount: 6,
      estimatedMinutes: 4,
      questions: [
        {
          id: 1,
          questionText: "At what age should most women begin annual mammogram screening?",
          options: ["30 years", "40 years", "50 years", "60 years"],
          correctAnswer: 2,
          explanation: {
            title: "Screening Guidelines",
            text: "Most major medical organizations recommend starting annual mammogram screening at age 50 for average-risk women, though some suggest beginning at 40. Women with higher risk factors (family history, genetic mutations) should discuss earlier screening with their healthcare provider. The key is to balance early detection benefits with potential harms from false positives."
          }
        },
        {
          id: 2,
          questionText: "What percentage of breast cancers occur in women with no family history?",
          options: ["About 10%", "About 35%", "About 55%", "About 85%"],
          correctAnswer: 3,
          explanation: {
            title: "The Family History Myth",
            text: "Approximately 85% of breast cancers occur in women with no family history of the disease. While having a first-degree relative with breast cancer does increase risk, the majority of cases occur in women without this risk factor. This is why screening is important for all women, not just those with family history."
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
            text: "Dense breast tissue contains more glandular and fibrous tissue relative to fatty tissue. This matters for two reasons: (1) Dense tissue appears white on mammograms, and so do tumors, making detection more difficult. (2) Women with dense breasts have a moderately increased risk of breast cancer. Additional screening methods like ultrasound or MRI may be recommended."
          }
        },
        {
          id: 4,
          questionText: "True or False: Most breast lumps are cancerous.",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation: {
            title: "Most Lumps Are Benign",
            text: "Approximately 80% of breast lumps are benign (non-cancerous). Common benign causes include cysts, fibroadenomas, and normal hormonal changes. However, any new lump should be evaluated by a healthcare provider, as clinical examination and often imaging are needed to determine if a lump requires biopsy."
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
            text: "BRCA1 and BRCA2 are tumor suppressor genes that normally help repair DNA damage. Mutations in these genes significantly increase the risk of breast cancer (up to 70% lifetime risk) and ovarian cancer. However, having a mutation doesn't guarantee cancer development. Women with BRCA mutations have options including enhanced screening, preventive medications, or risk-reducing surgery."
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
            text: "Regular physical activity and maintaining a healthy weight, especially after menopause, can reduce breast cancer risk. This is because fat tissue produces estrogen, and excess estrogen exposure increases cancer risk. Other beneficial factors include limiting alcohol consumption and breastfeeding if possible. While these don't eliminate risk, they can meaningfully reduce it."
          }
        }
      ]
    },
    {
      id: "pcos",
      title: "PCOS: Polycystic Ovary Syndrome",
      description: "Understanding this common hormonal disorder affecting reproductive-age women",
      icon: pcosIcon,
      questionCount: 7,
      estimatedMinutes: 5,
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
            text: "Despite its name, PCOS is not primarily about cysts. It's a complex hormonal disorder characterized by irregular periods, excess androgens (male hormones), and metabolic issues. The 'cysts' are actually many small follicles (immature eggs) that don't develop properly due to hormonal imbalances. PCOS affects approximately 10% of reproductive-age women."
          }
        },
        {
          id: 2,
          questionText: "Women with PCOS often have elevated levels of which hormone?",
          options: ["Estrogen", "Progesterone", "Insulin", "Testosterone"],
          correctAnswer: 3,
          explanation: {
            title: "Androgen Excess in PCOS",
            text: "Women with PCOS typically have elevated levels of androgens, particularly testosterone. This hormonal imbalance leads to symptoms like excess facial/body hair (hirsutism), acne, and scalp hair thinning. The androgen excess also interferes with normal ovulation, contributing to irregular periods and fertility challenges."
          }
        },
        {
          id: 3,
          questionText: "True or False: Insulin resistance plays a key role in PCOS.",
          options: ["True", "False"],
          correctAnswer: 0,
          explanation: {
            title: "The Insulin Connection",
            text: "Insulin resistance is present in 70-80% of women with PCOS. When cells don't respond properly to insulin, the pancreas produces more insulin to compensate. High insulin levels stimulate the ovaries to produce more androgens, worsening PCOS symptoms. This is why lifestyle changes improving insulin sensitivity (diet, exercise, weight loss) can significantly help manage PCOS."
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
            text: "Due to insulin resistance, women with PCOS have a significantly increased risk of developing type 2 diabetes. They also face higher risks of cardiovascular disease, high blood pressure, high cholesterol, metabolic syndrome, and endometrial cancer. Regular screening and preventive care are important for managing these risks."
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
            text: "The hormonal imbalances in PCOS prevent the normal development and release of eggs (ovulation). Without regular ovulation, pregnancy becomes difficult to achieve naturally. However, PCOS-related infertility is often treatable with medications that stimulate ovulation, lifestyle modifications, or assisted reproductive technologies."
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
            text: "For most women with PCOS, especially those who are overweight, lifestyle modifications are the first-line treatment. Even modest weight loss (5-10% of body weight) can improve insulin sensitivity, reduce androgen levels, restore ovulation, and improve menstrual regularity. Combined with medications when needed, this approach addresses PCOS at its metabolic root."
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
            text: "PCOS diagnosis typically requires at least 2 of 3 criteria (Rotterdam criteria): (1) Irregular or absent periods indicating lack of ovulation, (2) Clinical or biochemical signs of excess androgens (hirsutism, acne, elevated testosterone), (3) Polycystic ovaries seen on ultrasound (12+ follicles per ovary). Other conditions must be ruled out first."
          }
        }
      ]
    }
  ]
};
