cat > /home/claude/joe-design/config.js << 'ENDOFFILE'
const CONFIG = {
  name_en: "Joe Design",
  name_ar: "جو ديزاين",
  real_name: "يوسف",
  tagline_en: "Graphic Designer · AI-Powered Creativity",
  tagline_ar: "مصمم جرافيك · إبداع يدمج الذكاء الاصطناعي",
  bio_en: "I transform ideas into powerful visual identities that captivate audiences. I blend manual design craft with AI to deliver work that truly stands out.",
  bio_ar: "بحوّل أفكارك لهويات بصرية قوية تشد الانتباه وتقنع العملاء. بدمج التصميم اليدوي مع الذكاء الاصطناعي عشان أقدم شغل يتميز.",
  phone: "01124527286",
  whatsapp: "201124527286",
  email: "yfhhdrbkwuig@gmail.com",
  social: {
    instagram: "https://www.instagram.com/kaboos645/",
    tiktok: "ضع-رابط-التيك-توك-هنا",
    facebook: "ضع-رابط-الفيس-بوك-هنا",
    behance: "ضع-رابط-البيهانس-هنا",
    linkedin: "ضع-رابط-اللينكد-ان-هنا"
  },
  pricing: {
    amount: "4,000",
    currency_ar: "جنيه",
    currency_en: "EGP",
    designs_count: 30,
    note_ar: "لكل 30 تصميم",
    note_en: "per 30 designs"
  },
  stats: { projects: "+150", clients: "+80", years: "5+", brands: "+40" },
  portfolio_sections: [
    { name: "restaurants",   label_ar: "تصميم المطاعم",   label_en: "Restaurants"   },
    { name: "confectionery", label_ar: "تصميم الحلواني",  label_en: "Confectionery" },
    { name: "perfumes",      label_ar: "تصميم العطور",    label_en: "Perfumes"      },
    { name: "clothing",      label_ar: "تصميم الملابس",   label_en: "Clothing"      },
    { name: "menus",         label_ar: "تصميم المنيوهات", label_en: "Menus"         }
  ]
};
ENDOFFILE
echo "config.js created"
