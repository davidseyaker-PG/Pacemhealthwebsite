import { useRoute, Link, useLocation } from 'wouter';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Linkedin } from 'lucide-react';

// Leader data - matches the Leadership page data
const leaderData: Record<string, {
  name: string;
  title: string;
  image: string;
  email: string;
  linkedin?: string;
  fullBio: string[];
  category: 'us' | 'global';
}> = {
  'david-seyaker': {
    name: 'David Seyaker',
    title: 'Founder & Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODAwNjI4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'david.seyaker@pacemhealth.com',
    linkedin: 'https://www.linkedin.com',
    category: 'us',
    fullBio: [
      'David Seyaker founded Pacem Health in 2025 with a vision to strengthen healthcare delivery across Africa through integrated systems and sustainable solutions. As CEO, he guides the company\'s strategic direction, partnership development, and expansion across the African continent.',
      'With more than 15 years of experience in global health systems and medical supply chain management, David brings a unique combination of operational expertise and strategic vision. He has worked extensively across East, West, and Southern Africa, developing deep relationships with Ministries of Health, healthcare facilities, and development partners.',
      'Prior to founding Pacem Health, David served in leadership roles at international medical equipment distributors and global health organizations, where he managed multi-million dollar procurement programs and health system strengthening initiatives across 12 African countries. His experience spans pharmaceutical supply chains, medical equipment distribution, laboratory systems, and healthcare facility operations.',
      'David\'s approach to health systems strengthening emphasizes sustainability, local capacity building, and systems thinking. He believes that transforming African healthcare requires more than just delivering products—it requires integrated solutions that address procurement, training, maintenance, and sustainable financing simultaneously.',
      'Under his leadership, Pacem Health has established operations across multiple African countries, built partnerships with leading global manufacturers, and developed purpose-built financing mechanisms to improve healthcare access. The company\'s three-division model (Products & Procurement, Advisory Services, and Advanced Solutions) reflects his vision of comprehensive health system support.',
      'David holds a Master\'s degree in International Health from a leading U.S. university and a Bachelor\'s degree in Business Administration. He is a frequent speaker at global health conferences and has published on topics including health supply chain optimization, sustainable procurement models, and public-private partnerships in African healthcare.',
      'He serves on the advisory boards of several health technology companies and is actively involved in industry associations focused on improving healthcare access in resource-limited settings. David is passionate about mentoring the next generation of global health leaders and regularly engages with African universities and training programs.'
    ]
  },
  'sarah-mitchell': {
    name: 'Sarah Mitchell',
    title: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3OTM1MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'sarah.mitchell@pacemhealth.com',
    category: 'us',
    fullBio: [
      'Sarah Mitchell serves as Chief Operating Officer at Pacem Health, where she oversees operational excellence across product sourcing, quality assurance, and service delivery. She brings deep expertise in procurement, supply chain management, and healthcare supply chain regulation.',
      'With over 18 years of experience working with pharmaceutical distributors and medical device manufacturers, Sarah has built a reputation for operational agility and process optimization in complex healthcare environments.',
      'Prior to joining Pacem Health, Sarah held senior operations roles at Fortune 500 healthcare companies, where she managed global supply chains serving emerging markets. Her experience includes implementing quality management systems, regulatory compliance programs, and vendor management frameworks across multiple continents.',
      'Sarah\'s operational philosophy emphasizes building resilient systems that can adapt to the unique challenges of African markets—from navigating diverse regulatory environments to managing cold chain logistics in remote areas.',
      'Under her leadership, Pacem Health has established robust quality assurance processes, built relationships with WHO-prequalified manufacturers, and developed reliable distribution networks across multiple African countries.',
      'Sarah holds an MBA in Operations Management and a Bachelor\'s degree in Supply Chain Management. She is certified in Six Sigma methodologies and regularly speaks at industry conferences on topics related to healthcare supply chain excellence in emerging markets.'
    ]
  },
  'michael-anderson': {
    name: 'Michael Anderson',
    title: 'Chief Strategy Officer',
    image: 'https://images.unsplash.com/photo-1578758803946-2c4f6738df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjgwMDYyODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'michael.anderson@pacemhealth.com',
    category: 'us',
    fullBio: [
      'Michael Anderson leads strategic planning, market development, and advisory services expansion at Pacem Health. He specializes in designing health systems strengthening programs across 15 African countries and brings expertise in healthcare policy, business strategy, and digital health transformation.',
      'With a background spanning management consulting, global health program management, and healthcare technology, Michael has advised governments, international donors, and private sector organizations on health system transformation initiatives.',
      'Before joining Pacem Health, Michael worked with leading global health consulting firms, where he led assessments of national health systems, designed procurement reform programs, and developed sustainable financing strategies for Ministries of Health across Sub-Saharan Africa.',
      'Michael\'s strategic approach focuses on understanding the unique context of each market—including political economy, regulatory environment, and stakeholder landscape—to design solutions that are both ambitious and implementable.',
      'At Pacem Health, he has led the development of the company\'s advisory services division, which provides health systems assessments, procurement optimization, regulatory support, and capacity building to governments and healthcare organizations.',
      'Michael holds a Master\'s degree in Public Health with a focus on Health Policy and Management, and an undergraduate degree in Economics. He has published research on health financing mechanisms and frequently presents at global health forums on topics related to sustainable health systems strengthening in Africa.'
    ]
  },
  'jennifer-chen': {
    name: 'Jennifer Chen',
    title: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1758369636875-60b3dcb76366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJ1c2luZXNzd29tYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3OTQwMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'jennifer.chen@pacemhealth.com',
    category: 'us',
    fullBio: [
      'Jennifer Chen manages financial operations, investment planning, and sustainable financing strategies at Pacem Health. With a background in healthcare finance and international development, she ensures the organization\'s financial health while supporting its mission-driven approach to African health systems strengthening.',
      'Jennifer brings over 15 years of financial management experience across healthcare, international development, and social enterprise sectors. She specializes in sustainable financing mechanisms, impact investment, and financial sustainability for organizations operating in emerging markets.',
      'Prior to joining Pacem Health, Jennifer held senior finance roles at global health NGOs and impact investment funds, where she managed complex multi-country budgets, structured blended finance transactions, and developed performance-based financing models for health programs.',
      'Her financial leadership approach balances fiscal discipline with mission alignment, ensuring that Pacem Health maintains strong financial foundations while pursuing aggressive growth in underserved African markets.',
      'Jennifer has been instrumental in developing Pacem Health\'s financing solutions for healthcare facilities, including equipment leasing programs, supplier credit arrangements, and donor-funded procurement mechanisms.',
      'She holds an MBA in Finance and a Bachelor\'s degree in Accounting. Jennifer is a Certified Public Accountant (CPA) and frequently speaks on topics related to healthcare finance, impact measurement, and sustainable business models for health system strengthening.'
    ]
  },
  'robert-williams': {
    name: 'Robert Williams',
    title: 'Chief Procurement Officer',
    image: 'https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzk3NjQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'robert.williams@pacemhealth.com',
    category: 'us',
    fullBio: [
      'Robert Williams leads product strategy, vendor relationships, and procurement operations across pharmaceutical, medical equipment, and laboratory supplies at Pacem Health. His 20+ years in global healthcare procurement bring deep expertise in competitive pricing for African health systems.',
      'Robert has built an extensive network of relationships with pharmaceutical manufacturers, medical device companies, and laboratory equipment suppliers worldwide, enabling Pacem Health to offer competitive pricing and reliable supply chains to African healthcare facilities.',
      'Before joining Pacem Health, Robert served as Director of Procurement at major pharmaceutical distributors and international health organizations, managing procurement portfolios exceeding $500 million annually across developing markets.',
      'His procurement philosophy emphasizes building long-term partnerships with quality manufacturers, rigorous vendor due diligence, and creating transparent pricing structures that deliver value to customers while ensuring product quality and regulatory compliance.',
      'Robert has pioneered innovative procurement approaches including group purchasing mechanisms, direct manufacturer relationships, and volume commitment agreements that reduce costs for African health facilities while maintaining the highest quality standards.',
      'He holds a Master\'s degree in Supply Chain Management and professional certifications in procurement and contract management. Robert regularly speaks at industry conferences on topics including global health procurement, vendor management, and supply chain optimization for resource-limited settings.'
    ]
  },
  'lisa-thompson': {
    name: 'Lisa Thompson',
    title: 'VP of Business Development',
    image: 'https://images.unsplash.com/photo-1553028826-defa0c2187d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwbGVhZGVyfGVufDF8fHx8MTc2ODAwNjI4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'lisa.thompson@pacemhealth.com',
    category: 'us',
    fullBio: [
      'Lisa Thompson drives new market expansion, government partnerships, and strategic alliances across Africa at Pacem Health. Previously with USAID and the World Bank, she brings extensive experience in public-private partnerships and sustainable finance for health system strengthening.',
      'With over 12 years working on health programs across Sub-Saharan Africa, Lisa has developed deep expertise in navigating complex government procurement processes, building relationships with Ministries of Health, and structuring partnerships with international donors and development finance institutions.',
      'At USAID, Lisa managed health systems strengthening programs in 8 African countries, overseeing procurement technical assistance, supply chain reforms, and capacity building initiatives. At the World Bank, she supported the design of health sector financing reforms and public-private partnership frameworks.',
      'Lisa\'s approach to business development emphasizes long-term relationship building, understanding government priorities, and aligning Pacem Health\'s solutions with national health strategies and donor-funded programs.',
      'She has been instrumental in securing major contracts with government health programs, establishing partnerships with international NGOs, and positioning Pacem Health as a trusted partner for health system strengthening across multiple African markets.',
      'Lisa holds a Master\'s degree in International Development with a focus on Health Policy, and a Bachelor\'s degree in International Relations. She speaks French and regularly engages with Francophone African markets. She is passionate about mentoring young professionals in global health and international development.'
    ]
  },
  'amara-okonkwo': {
    name: 'Dr. Amara Okonkwo',
    title: 'Africa Regional Director',
    image: 'https://images.unsplash.com/photo-1675383094481-3e2088da943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBwcm9mZXNzaW9uYWwlMjBzdWl0fGVufDF8fHx8MTc2ODAwNjQ3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'amara.okonkwo@pacemhealth.com',
    category: 'global',
    fullBio: [
      'Dr. Amara Okonkwo leads regional operations across Africa, overseeing market development, government partnerships, and service implementation. Former senior advisor to multiple African Ministries of Health, she brings unparalleled regional expertise and strategic relationships.',
      'With a PhD in Public Health and over 20 years of experience in African health systems, Dr. Okonkwo has worked across 25 African countries in roles spanning government advisory, international development, and private sector health initiatives.',
      'Before joining Pacem Health, she served as a senior health advisor to the Nigerian Federal Ministry of Health, where she led national health procurement reforms and Essential Medicines List revisions. She has also worked with the African Union and regional economic communities on health policy harmonization.',
      'Dr. Okonkwo\'s deep understanding of African political economies, regulatory environments, and health system challenges makes her an invaluable strategic asset. She maintains close relationships with health ministers, procurement agency directors, and development partners across the continent.',
      'Under her leadership, Pacem Health has successfully expanded operations into new markets, navigated complex regulatory approvals, and built trust with government stakeholders by demonstrating consistent delivery and commitment to health system strengthening.',
      'Dr. Okonkwo holds a PhD in Public Health from a leading African university, a Master\'s degree in Health Economics, and a medical degree. She has published extensively on African health systems and is a frequent speaker at continental health forums. She is passionate about building African-led solutions to African health challenges.'
    ]
  },
  'james-kariuki': {
    name: 'James Kariuki',
    title: 'Director of Port Operations',
    image: 'https://images.unsplash.com/photo-1621062089461-01f1eaebb66c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwbWFuJTIwYnVzaW5lc3MlMjBzdWl0fGVufDF8fHx8MTc2ODAwNjQ3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'james.kariuki@pacemhealth.com',
    category: 'global',
    fullBio: [
      'James Kariuki manages operations across Kenya, Tanzania, Uganda, Rwanda, and Ethiopia. With 20+ years in pharmaceutical logistics and port operations in East Africa, he ensures seamless delivery of equipment, training, and technical support to health facilities.',
      'James began his career in pharmaceutical distribution in Kenya and has built deep expertise in East African customs regulations, cold chain logistics, and last-mile delivery to rural health facilities across challenging terrains.',
      'Before joining Pacem Health, James served as Operations Director for major pharmaceutical importers in East Africa, managing port clearance, warehousing, and distribution networks serving thousands of health facilities across the region.',
      'His operational excellence has been critical to Pacem Health\'s success in East Africa. James has established reliable distribution networks, built relationships with customs authorities, and developed innovative solutions for maintaining cold chain integrity during transportation to remote areas.',
      'James is known for his problem-solving abilities and commitment to ensuring that health products reach facilities on time and in good condition, regardless of infrastructure challenges.',
      'He holds a degree in Supply Chain Management and professional certifications in cold chain logistics and pharmaceutical warehousing. James is active in industry associations and regularly mentors young logistics professionals across East Africa.'
    ]
  },
  'fatima-diallo': {
    name: 'Fatima Diallo',
    title: 'Director of Partnerships - Africa',
    image: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjgwMDY0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'fatima.diallo@pacemhealth.com',
    category: 'global',
    fullBio: [
      'Fatima Diallo builds and manages strategic partnerships with Ministries of Health, international donors, NGOs, USAID and the African Union. She has deep expertise in public-private partnerships and donor coordination.',
      'With a background in international development and over 15 years working with multilateral organizations, Fatima has developed extensive networks across the African development community and deep understanding of donor priorities and funding mechanisms.',
      'Before joining Pacem Health, Fatima worked with the African Development Bank and major international NGOs, managing health sector partnerships and coordinating multi-stakeholder initiatives across Francophone and Anglophone Africa.',
      'Fluent in French, English, and Arabic, Fatima excels at building bridges between diverse stakeholders—from government officials to donor representatives to private sector partners—to create collaborative approaches to health system challenges.',
      'She has been instrumental in positioning Pacem Health as a partner of choice for donor-funded procurement programs, securing partnerships with major global health initiatives, and building relationships with African Union health institutions.',
      'Fatima holds a Master\'s degree in International Development and a Bachelor\'s degree in Political Science. She is passionate about African-led development solutions and regularly speaks at conferences on topics related to partnership models for health system strengthening.'
    ]
  },
  'kwame-mensah': {
    name: 'Kwame Mensah',
    title: 'West Africa Operations Director',
    image: 'https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXN0JTIwYWZyaWNhbiUyMGJ1c2luZXNzbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MDA2NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'kwame.mensah@pacemhealth.com',
    category: 'global',
    fullBio: [
      'Kwame Mensah directs operations across Nigeria, Ghana, Senegal, and Francophone West Africa. With extensive experience in pharmaceutical distribution and cold chain logistics, warehousing, and last-mile delivery across challenging environments.',
      'Based in Accra, Ghana, Kwame has over 18 years of experience in pharmaceutical distribution, medical equipment supply, and healthcare logistics across West Africa. He has deep knowledge of ECOWAS regulations, national procurement systems, and the unique operational challenges of West African markets.',
      'Before joining Pacem Health, Kwame served as Regional Manager for pharmaceutical distributors serving both Anglophone and Francophone West Africa, managing operations across 8 countries and building distribution networks that reached urban teaching hospitals and rural health centers alike.',
      'Kwame\'s operational expertise includes navigating Nigeria\'s complex regulatory environment, managing multi-country distribution from regional hubs, and developing innovative last-mile delivery solutions for areas with limited infrastructure.',
      'He is fluent in English and French and has built strong relationships with regulators, customs officials, and logistics partners across West Africa, enabling Pacem Health to operate efficiently across diverse regulatory and operational environments.',
      'Kwame holds a degree in Business Administration with a focus on International Trade and professional certifications in pharmaceutical distribution and quality assurance. He is committed to building local capacity and regularly trains logistics staff across West Africa.'
    ]
  },
  'thandive-moyo': {
    name: 'Dr. Thandive Moyo',
    title: 'Chief Medical Officer - Africa',
    image: 'https://images.unsplash.com/photo-1632054226770-9ce6a8915462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmVtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODAwNjQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'thandive.moyo@pacemhealth.com',
    category: 'global',
    fullBio: [
      'Dr. Thandive Moyo provides clinical leadership and medical expertise across product selection, clinical training programs, and health facility support. A trained pharmacist with 15+ years across Southern Africa, she ensures clinical appropriateness of all solutions and services.',
      'Dr. Moyo brings both clinical expertise and operational experience from her years working in hospital pharmacies, national medicines regulatory authorities, and pharmaceutical distribution across Southern Africa.',
      'Before joining Pacem Health, she served as Chief Pharmacist at a major referral hospital in Zimbabwe and later as a technical advisor to the Medicines Control Authority, where she was involved in product registration, quality assurance, and pharmacovigilance.',
      'Her clinical background ensures that Pacem Health\'s product selection, training programs, and technical support meet the actual needs of healthcare workers and patients. She regularly conducts clinical assessments of health facilities to understand their challenges and identify appropriate solutions.',
      'Dr. Moyo has designed clinical training programs on pharmaceutical management, medical equipment use, and laboratory quality assurance that have trained over 3,000 healthcare workers across Southern Africa.',
      'She holds a Doctor of Pharmacy degree and a Master\'s degree in Public Health. Dr. Moyo is registered with multiple national pharmacy councils across Southern Africa and is passionate about elevating pharmaceutical practice standards and ensuring access to quality-assured medicines.'
    ]
  },
  'mohammed-hassan': {
    name: 'Mohammed Hassan',
    title: 'Southern Africa Regional Manager',
    image: 'https://images.unsplash.com/photo-1608009139974-b77b4d1b6933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFmcmljYW4lMjBidXNpbmVzc21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgwMDY0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'mohammed.hassan@pacemhealth.com',
    category: 'global',
    fullBio: [
      'Mohammed Hassan manages market development and operations across South Africa, Botswana, Zambia, Zimbabwe, and Mozambique. His expertise in Southern African health systems and procurement agencies ensures successful engagement.',
      'With over 14 years of experience in healthcare business development and government relations across Southern Africa, Mohammed has built extensive networks with procurement agencies, hospital administrators, and health ministry officials.',
      'Before joining Pacem Health, Mohammed worked in sales and business development roles for medical equipment manufacturers and pharmaceutical companies, building deep knowledge of Southern African markets, regulatory requirements, and procurement processes.',
      'His relationship-building skills and market knowledge have been instrumental in expanding Pacem Health\'s footprint across Southern Africa, securing contracts with provincial health departments, hospital groups, and development programs.',
      'Mohammed is skilled at navigating diverse regulatory environments—from South Africa\'s stringent SAHPRA requirements to the procurement systems of smaller Southern African nations—and ensuring compliance while maintaining operational efficiency.',
      'He holds a degree in Business Management and professional certifications in medical device regulation. Mohammed is fluent in English and Portuguese, enabling effective engagement across both Anglophone and Lusophone Southern African markets.'
    ]
  },
  'grace-wanjiru': {
    name: 'Grace Wanjiru',
    title: 'Director of Training & Capacity Building',
    image: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgwMDY0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'grace.wanjiru@pacemhealth.com',
    category: 'global',
    fullBio: [
      'Grace Wanjiru develops and delivers training programs for healthcare workers across Africa on medical equipment, laboratory systems, and pharmacy operations. With a background in nursing education and biomedical engineering, she has trained over 5,000 healthcare workers in 8 countries.',
      'Grace combines clinical knowledge with technical expertise, having worked as a nurse in Kenya and later trained in biomedical engineering to support medical equipment maintenance programs.',
      'Before joining Pacem Health, Grace managed training programs for medical equipment suppliers and international health organizations, developing curriculum for equipment operation, preventive maintenance, and troubleshooting.',
      'Her training philosophy emphasizes hands-on, practical learning that equips healthcare workers with skills they can immediately apply. She designs training programs that are culturally appropriate, use local languages where needed, and include follow-up support to ensure skills retention.',
      'Grace has developed training materials on medical equipment operation, laboratory quality assurance, pharmaceutical management, and cold chain maintenance. Her programs include both theoretical foundations and practical competency-based assessments.',
      'She holds a Bachelor\'s degree in Nursing, a diploma in Biomedical Engineering, and certifications in adult education methodologies. Grace is passionate about empowering healthcare workers with the knowledge and confidence to use technology effectively to improve patient care.'
    ]
  },
  'youssef-el-amin': {
    name: 'Youssef El-Amin',
    title: 'North Africa & Francophone Director',
    image: 'https://images.unsplash.com/photo-1719561940606-ec38a36e5f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aCUyMGFmcmljYW4lMjBidXNpbmVzc21hbiUyMHN1aXR8ZW58MXx8fHwxNzY4MDA2NDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'youssef.elamin@pacemhealth.com',
    category: 'global',
    fullBio: [
      'Youssef El-Amin leads operations across North Africa and Francophone markets, including Morocco, Tunisia, Egypt, and Central Africa. Fluent in French and Arabic, he navigates diverse regulatory environments and cultural contexts to expand Pacem Health\'s reach across the francophone world.',
      'With over 16 years of experience in pharmaceutical distribution and medical equipment supply across North Africa and Francophone markets, Youssef brings deep expertise in both Maghreb and Sub-Saharan Francophone African contexts.',
      'Before joining Pacem Health, Youssef worked with pharmaceutical distributors and medical equipment importers serving North African markets, building expertise in complex regulatory environments and developing relationships with health authorities across the region.',
      'His multilingual capabilities (Arabic, French, English) and cultural fluency enable effective engagement across diverse markets—from North African countries with strong pharmaceutical manufacturing sectors to Central African countries heavily dependent on imports.',
      'Youssef has been instrumental in establishing Pacem Health\'s operations in Francophone markets, navigating regulatory approvals, building partnerships with local distributors, and adapting the company\'s business model to different market contexts.',
      'He holds a degree in International Business and professional certifications in pharmaceutical import regulations. Youssef is committed to strengthening health systems across Francophone Africa and frequently speaks at regional health conferences on topics related to pharmaceutical supply chain development.'
    ]
  },
  'adaeze-nwachukwu': {
    name: 'Adaeze Nwachukwu',
    title: 'Director of Quality & Regulatory Affairs - Africa',
    image: 'https://images.unsplash.com/photo-1643660398957-614da01c6b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3N3b21hbiUyMHByb2Zlc3Npb25hbCUyMGdsYXNzZXN8ZW58MXx8fHwxNzY4MDA2NDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'adaeze.nwachukwu@pacemhealth.com',
    category: 'global',
    fullBio: [
      'Adaeze Nwachukwu ensures compliance with medicines regulatory requirements across all African markets. With experience at national medicines regulatory authorities and WHO pre-qualification programs, she maintains quality standards and regulatory compliance across all product categories.',
      'Adaeze brings over 12 years of experience in pharmaceutical regulation, quality assurance, and product registration across African markets. She has worked on both sides—as a regulator and as a regulated entity—giving her unique insights into regulatory processes.',
      'Before joining Pacem Health, Adaeze served as a regulatory affairs specialist at Nigeria\'s National Agency for Food and Drug Administration and Control (NAFDAC), where she was involved in product registration, facility inspections, and post-market surveillance.',
      'She later worked with international pharmaceutical companies managing product registrations across multiple African countries and ensuring compliance with WHO good manufacturing practices and distribution standards.',
      'At Pacem Health, Adaeze oversees product quality assurance, manages regulatory registrations across African markets, conducts vendor audits, and ensures that all products meet both international quality standards and local regulatory requirements.',
      'She holds a degree in Pharmacy, a Master\'s degree in Regulatory Affairs, and professional certifications in Good Manufacturing Practices and quality management systems. Adaeze is passionate about raising quality standards in African pharmaceutical supply chains and regularly trains staff on regulatory compliance and quality assurance.'
    ]
  }
};

export default function LeaderBio() {
  const [, params] = useRoute('/about/leadership/:slug');
  const [location] = useLocation();
  const slug = params?.slug || '';
  
  const leader = leaderData[slug];

  if (!leader) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-heading font-extrabold mb-4">Leader Not Found</h1>
          <Link href="/about/leadership">
            <a className="text-blue hover:text-white underline">Back to Leadership</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/about/company" className="hover:text-white transition-colors">
              About
            </Link>
            <span>/</span>
            <Link href="/about/leadership" className="hover:text-white transition-colors">
              Management
            </Link>
            <span>/</span>
            <span className="text-white">{leader.name}</span>
          </div>
        </div>
      </div>

      {/* Back to Management Link */}
      <div className="bg-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/about/leadership" className="inline-flex items-center gap-2 text-white hover:text-blue transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Management</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-6xl lg:text-7xl font-heading font-extrabold text-white mb-4">{leader.name}</h1>
          <p className="text-2xl text-white/80">{leader.title}</p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Biography */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {leader.fullBio.map((paragraph, index) => (
              <p key={index} className="text-white/90 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-6 self-start"
          >
            <div className="relative">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full rounded-lg shadow-2xl"
              />
              <p className="text-white/60 text-sm mt-4 text-right">{leader.name}</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 space-y-4"
        >
          <a
            href={`mailto:${leader.email}`}
            className="flex items-center gap-3 text-white hover:text-blue transition-colors group"
          >
            <Mail className="w-5 h-5" />
            <span className="group-hover:underline">{leader.email}</span>
          </a>
          {leader.linkedin && (
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-blue transition-colors group"
            >
              <Linkedin className="w-5 h-5" />
              <span className="group-hover:underline">Connect with {leader.name.split(' ')[0]}</span>
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
}