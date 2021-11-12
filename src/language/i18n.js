import { createI18n } from 'vue-i18n'
import messages from './index'
const language = (
    (navigator.language ? navigator.language : navigator.userLanguage) || "en"
).toLowerCase();
const i18n = createI18n({
    fallbackLocale: 'ch', // en ch
    globalInjection: true,
    legacy: false, // you must specify 'legacy: false' option
    // locale: language.split("-")[0] || "zh",
    locale: "en",
    messages,
});

export default i18n