// Buttons

let projectsBtn = document.querySelector('.projects-btn') ;
let aboutmeBtn = document.querySelector('.aboutme-btn') ;
let faqsBtn = document.querySelector('.faqs-btn') ;
let practiceBtn = document.querySelector('.practice-btn') ;

// Containers

let projectsCon = document.querySelector('.projects-con') ;
let aboutmeCon = document.querySelector('.aboutme-con') ;
let faqsCon = document.querySelector('.faqs-con') ;
let practiceCon = document.querySelector('.practice-con') ;

// Booleans

let Projects_stat = true ;
let AboutMe_stat = false ;
let FAQs_stat = false ;
let Practice_stat = false ;

// functions ( onclick ) 

function dh_Projects()
{
    if( !Projects_stat )
    {
        projectsCon.style.display = "grid" ;
        aboutmeCon.style.display = "none" ;
        faqsCon.style.display = "none" ;
        practiceCon.style.display = "none" ;

        Projects_stat = true ;
        AboutMe_stat = false ;
        FAQs_stat = false ;
        Practice_stat = false ;

        projectsBtn.style.color = "white" ;
        aboutmeBtn.style.color = "rgb(172, 172, 172)" ;
        faqsBtn.style.color = "rgb(172, 172, 172)" ;
        practiceBtn.style.color = "rgb(172, 172, 172)" ;
    }
}

function dh_AboutMe()
{
    if( !AboutMe_stat )
    {
        aboutmeCon.style.display = "grid" ;
        projectsCon.style.display = "none" ;
        faqsCon.style.display = "none" ;
        practiceCon.style.display = "none" ;

        AboutMe_stat = true ;
        Projects_stat = false ;
        FAQs_stat = false ;
        Practice_stat = false ;

        projectsBtn.style.color = "rgb(172, 172, 172)" ;
        aboutmeBtn.style.color = "white" ;
        faqsBtn.style.color = "rgb(172, 172, 172)" ;
        practiceBtn.style.color = "rgb(172, 172, 172)" ;
    }
}

function dh_FAQs()
{
    if( !FAQs_stat )
    {
        faqsCon.style.display = "block" ;
        projectsCon.style.display = "none" ;
        aboutmeCon.style.display = "none" ;
        practiceCon.style.display = "none" ;
    
        FAQs_stat = true ;
        Projects_stat = false ;
        AboutMe_stat = false ;
        Practice_stat = false ;

        projectsBtn.style.color = "rgb(172, 172, 172)" ;
        aboutmeBtn.style.color = "rgb(172, 172, 172)" ;
        practiceBtn.style.color = "rgb(172, 172, 172)" ;
        faqsBtn.style.color = "white" ;
    }
}

function dh_Practice()
{
    if( !Practice_stat )
    {
        
        practiceCon.style.display = "grid" ;
        aboutmeCon.style.display = "none" ;
        projectsCon.style.display = "none" ;
        faqsCon.style.display = "none" ;


        Practice_stat = true ;
        AboutMe_stat = false ;
        Projects_stat = false ;
        FAQs_stat = false ;

        practiceBtn.style.color = "white" ;
        projectsBtn.style.color = "rgb(172, 172, 172)" ;
        aboutmeBtn.style.color = "rgb(172, 172, 172)" ;
        faqsBtn.style.color = "rgb(172, 172, 172)" ;
    }
}

projectsBtn.style.color = "white" ;