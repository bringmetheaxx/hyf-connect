import HeaderComponent from "../../components/header-component.js";
import FooterComponent from "../../components/footer-component.js";
import MainSection from "./main-section.js";

const page = Vue.createApp({
  components: {
    HeaderComponent,
    MainSection,
    FooterComponent,
    
  },
  template: `
      <div class="page">
        <header-component></header-component>
        <main-section></main-section>
        <footer-component></footer-component>
      </div>
    
      `,
}).mount("#contact-us");

export default page;
