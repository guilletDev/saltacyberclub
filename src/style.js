const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-Roboto font-semibold xs:text-[24px] text-[40px] text-white xs:leading-[29px] leading-[66.8px] w-full text-center",
    paragraph: "font-Roboto font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    botonHero: 'text-center text-white hover:bg-transparent transition duration-300 sm:text-sm font-semibold sm:ml-4 ml-4 mt-4 border sm:py-3 sm:px-5 px-4 py-3.5 rounded bg-fuchsia-900 border-slate-50 border-20',
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;