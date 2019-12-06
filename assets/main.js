    

    window.onload=function(){
        napraviMeni()
        sideMeni()
        napraviUsluge()
        napraviTestimonial()
    }

//menu
    function napraviMeni(){
        var mainNav = document.getElementById('mainNav');

        var mainMenu = document.getElementById('mainMenu');

        mainNavNiz = ['Usluge', 'Nasa Misija', 'Kako smo poceli', 'Kontakt'];

        mainNizIdLink = ['usluge','nasaMisija','kakoSmoPoceli','kontakt']
        for(let i=0 ; i< mainNavNiz.length; i++){

            var createLi = document.createElement('li');
            
            var createLink = document.createElement('a');
            
            for(var j=0; j<mainNizIdLink.length;j++){

                createLink.setAttribute('href', '#'+mainNizIdLink[i]);
            }

            var contentLi = document.createTextNode(mainNavNiz[i]);

            createLink.appendChild(contentLi);

            createLi.appendChild(createLink)

            mainMenu.appendChild(createLi);
        }  
    }
    
    //SIDE
    function sideMeni(){
        var mainMenuSide = document.getElementById('mainMenuSide');

        var mainNavNizSide = ['Usluge', 'Nasa Misija', 'Kako smo poceli', 'Kontakt'];

        var mainNizIdLinkSide = ['usluge','nasaMisija','kakoSmoPoceli','kontakt']

        for(let i=0 ; i< mainNavNizSide.length; i++){

            var createLiSide = document.createElement('li');

            createLiSide.setAttribute('class','linkSide')
            
            var createLinkSide = document.createElement('a');
            
            for(var j=0; j<mainNizIdLinkSide.length;j++){

                createLinkSide.setAttribute('href', '#'+mainNizIdLinkSide[i]);
            }

            var contentLiSide = document.createTextNode(mainNavNizSide[i]);

            createLinkSide.appendChild(contentLiSide);

            createLiSide.appendChild(createLinkSide)

            mainMenuSide.appendChild(createLiSide);
        }  
    }
    

    //USLUGE
    function napraviUsluge(){

        var services = document.getElementById('service');

        var serviceIcon = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png'];

        var serviceH3= ['Otvaranje firme u formi shodno vašim željama i potrebama','Privremene/trajne odjave','Knjigovodstvo','Platni promet','Prijave i odjave zaposenih','Poresko savetovanje','Poresko savetovanje','Praćenje propisa','Konsalting u oblasti normativnih akata','Fiskalizacija i instalacija programa za povezivanje na fiskalnu kasu','Zastupanje','Konsalting iz oblasti građevine']

        var serviceText=['Ova usluga je za korisnike naših usluga besplatna, osim ukoliko registrujete DOO, onda samo plaćate uslugu izrade Ugovora o osnovanju','Ova usluga je takođe za korisnike naših usluga besplatna. U okviru ove usluge za vas završavamo proceduru u APR-u, PIO Fondu i Fondu za zdravstveno osiguranje, Poreskoj upravi','vođenje poslovnih knjiga po sistemu dvojnog knjigovodstva u skladu sa Međunarodnim računovodstvenim standardima, vođenje analitičkih evidencija (analitika kupaca, analitika dobavljača, evidenciju osnovnih sredstava, zalihe)','Pored obrade dokumentacije svojim klijentma nudimo i servis platnog prometa. Pomenuta usluga se dodatno tarifira, ali nudi komfor da ne mislite o','Ova ulsuga je obuhvaćena bilo kojim paketom usluga. Ne utiče na cenu mesečne naknade bez obzira na broj zaposlenih. U okviru ove usluge','Našim klijentima nudimo poresko savetovanje, kako da u okviru zakonskih mogućnosti, uz minimalan rizik i ulaganja ostvare najveći profit','Primenom najsavremenijih softvera za vas vršimo sledeće vrste obračuna: zarada, naknada zarada i drugih ličnih primanja, poreza i doprinosa iz samostalne delatnosti, poreza na dobit preduzeća','Kako je naša zemlja još uvek u fazi tranzicije, potencijalni kandidat za članstvo u Evropskoj uniji, izmene Zakona i podzakonskih akata su neminovnost na koju smo primorani. Naša obaveza je da te izmene permanentno pratimo i našim','U saradnji sa partnerskim advokatskim kancelarijama, našim klijentima nudimo izradu kompletnih normativnih akata – od osnivačkih, preko računovodstvenih do akata','Ova usluga je namenjena prevashodno ugostiteljskim i maloprodajnim objektima. U saradnji sa partnerskom programerskom kućom','Našim klijentima obezbeđujemo zastupanje pred inspekcijskim i ostalim državnim organima. Pored toga možemo da vam ponudimo i zastupanje pred sudovima','Zainteresovanim investitorima nudimo konsalting u oblasti gradnje na teritorije Beograda, od informacije o lokaciji do uknjižbe novoizgrađenog objekta (podnošenje zahteva na CEOP']
    

        for(let i=0; i<serviceIcon.length;i++){

            var divNapravi = document.createElement('div');

            divNapravi.classList.add('serviceDiv');

            divNapravi.classList.add('col-lg-4');

            divNapravi.classList.add('col-md-6');

            divNapravi.classList.add('col-sm-12');

            var slikaNapravi = document.createElement('img');

            slikaNapravi.setAttribute('src','images/icons/'+serviceIcon[i]);

            divNapravi.appendChild(slikaNapravi);

            services.appendChild(divNapravi)
        }

        var divNapraviNovi= document.getElementsByClassName('serviceDiv');

        for( let i=0 ; i< divNapraviNovi.length ; i++){
                
                for(var j=0 ; j<serviceH3.length ; j++ ){

                    var h3Napravi = document.createElement('h3');
                    
                    var h3Text = document.createTextNode(serviceH3[i]);
                
                    h3Napravi.appendChild(h3Text);
                    
                }
                for(var k=0; k<serviceText.length ; k++){

                    var pNapravi = document.createElement('p');
                
                    var pText = document.createTextNode(serviceText[i]);
                    
                    pNapravi.appendChild(pText);
                
                }

                divNapraviNovi[i].appendChild(h3Napravi);

                divNapraviNovi[i].appendChild(pNapravi);
        }
    }
    
    //Testimonials
    function napraviTestimonial(){
        var testimonialDohvati = document.getElementById('dohvatiTestimonial')

    var testimonialH4 = ['Marko Stašić - Pekara DEA','Miljana Stefanović - Frizerski salon Buca','Milan Vlajković - caffe Prizma','Aleksa Marjanović - FitGear','Milica Marković - Salon lepote Frida','Damjan Crnogorčević - Dobra Pekara']

    var testimonialP = ['Odlično dugogodišnje iskustvo, Consulting CO pruža sigurnost kao i profesionalizam! Preporučujem svakom preduzetniku!','Od kako sam otkrila za Consulting CO, moj biznis je doživeo pravi rast. Moja preporuka, nećete zažaliti!','Hteo bih da zahvalim Consulting CO na vraćenom poverenju, nikada nisam verovao knjigovodstvenim agencijama dok nisam naišao na njih!','U svetu fitnesa mnogo troškova i zarade prodje nezapaženo ali uz Consulting CO tih problema više nemam, moja preporuka.','Consulting CO je stvarno agencija od poverenja, sama sam se uverila u to i već 3 godine sarađujemo!','Kvalitet i poverenje zagarantovano, ophode se prema klijentima kao prema ćlanovima porodice a tako se i osećam!']

    for(let i = 0; i < testimonialH4.length ; i++){

        var testimonialDiv = document.createElement('div')

        testimonialDiv.classList.add('testimonialSlider')

        testimonialDiv.classList.add('text-center')

        var testimonialH4Pravi = document.createElement('h4')
       
        var h4Text = document.createTextNode(testimonialH4[i])
        
        testimonialH4Pravi.appendChild(h4Text)
        
        testimonialDiv.appendChild(testimonialH4Pravi)
        
        testimonialDohvati.appendChild(testimonialDiv)
        
    }
    var dohvatiDivoveTestimonial = document.getElementsByClassName('testimonialSlider')
    for(let i=0 ; i<dohvatiDivoveTestimonial.length ; i++){

        var napraviPTestimonial = document.createElement('p');

        var textPTestimonial = document.createTextNode(testimonialP[i])

        napraviPTestimonial.appendChild(textPTestimonial)

        dohvatiDivoveTestimonial[i].appendChild(napraviPTestimonial)
    }
    }
    
    //ime na blur
    document.getElementById('ime').addEventListener('blur',function(){

        var dohvatiIme=document.getElementById('ime').value

        var imeRegIzraz=/^[A-Z][a-z]{1,20}(\s[A-Z][a-z]+){0,1}$/

        var imeTest=imeRegIzraz.test(dohvatiIme)

        if(imeTest){
            document.getElementById('ime').style.border="1px solid #00FF43";
        }
        else if(!imeTest){
            document.getElementById('ime').style.border="1px solid #FF4747";
        }
        else{
            document.getElementById('ime').style.border="1px solid #0083B0";
        }
    })

    //prezime na blur
    document.getElementById('prezime').addEventListener('blur',function(){

        var dohvatiPrezime=document.getElementById('prezime').value

        var prezimeRegIzraz=/^[A-Z][a-z]{3,20}(\s[A-Z][a-z]+){0,1}$/

        var prezimeTest=prezimeRegIzraz.test(dohvatiPrezime)

        if(prezimeTest){
            document.getElementById('prezime').style.border="1px solid #00FF43";
        }
        else if(!prezimeTest){
            document.getElementById('prezime').style.border="1px solid #FF4747";
        }
        else{
            document.getElementById('prezime').style.border="1px solid #0083B0";
        }
    })

    //email na blur
    document.getElementById('email').addEventListener('blur',function(){

        var dohvatiEmail=document.getElementById('email').value

        var EmailRegIzraz=/^[a-z][a-z\d\_\-\.]+\@[a-z]{3,10}\.[a-z]{2,3}$/

        var EmailTest=EmailRegIzraz.test(dohvatiEmail)

        if(EmailTest){
            document.getElementById('email').style.border="1px solid #00FF43";
        }
        else if(!EmailTest){
            document.getElementById('email').style.border="1px solid #FF4747";
        }
        else{
            document.getElementById('email').style.border="1px solid #0083B0";
        }
    })

    //provera na click
    document.getElementById('provera').addEventListener('click',proveri)
    function proveri(){
        var greska=false;
        //ime
        var dohvatiIme=document.getElementById('ime').value

        var imeRegIzraz=/^[A-Z][a-z]{1,20}(\s[A-Z][a-z]+){0,1}$/

        var imeTest=imeRegIzraz.test(dohvatiIme)

        if(imeTest){
            document.getElementById('ime').style.border="1px solid #00FF43";
        }
        else if(!imeTest){
            document.getElementById('ime').style.border="1px solid #FF4747";
            greska=true;
        }
        else{
            document.getElementById('ime').style.border="1px solid #0083B0";
        }

        //prezime
            var dohvatiPrezime=document.getElementById('prezime').value

            var prezimeRegIzraz=/^[A-Z][a-z]{3,20}(\s[A-Z][a-z]+){0,1}$/

            var prezimeTest=prezimeRegIzraz.test(dohvatiPrezime)

            if(prezimeTest){
                document.getElementById('prezime').style.border="1px solid #00FF43";
            }
            else if(!prezimeTest){
                document.getElementById('prezime').style.border="1px solid #FF4747";
                greska=true;
            }
            else{
                document.getElementById('prezime').style.border="1px solid #0083B0";
            }

            //email
            var dohvatiEmail=document.getElementById('email').value

            var EmailRegIzraz=/^[a-z][a-z\d\_\-\.]+\@[a-z]{3,10}\.[a-z]{2,3}$/

            var EmailTest=EmailRegIzraz.test(dohvatiEmail)

            if(EmailTest){
                document.getElementById('email').style.border="1px solid #00FF43";
            }
            else if(!EmailTest){
                document.getElementById('email').style.border="1px solid #FF4747";
                greska=true;
            }
            else{
                document.getElementById('email').style.border="1px solid #0083B0";
            }
        if(!greska){
            alert ("Forma je prosla")
            document.getElementById('forma').reset()
            document.getElementById('ime').style.border="1px solid #0083B0";
            document.getElementById('prezime').style.border="1px solid #0083B0"
            document.getElementById('email').style.border="1px solid #0083B0"
            
        }
            
    }
//SLICK SLIDER main
$(document).ready(function(){
    $('.mainText').slick({
        
    slidesToShow: 1,

    slidesToScroll: 1,

    autoplay: true,

    autoplaySpeed: 2500,

    arrows:false,
    })
    //SLICK Testimonial
    
    $('.testimonial').slick({
        
        slidesToShow: 1,
    
        slidesToScroll: 1,
    
        autoplay: true,
    
        autoplaySpeed: 2000,
    
        arrows:false,
        })
    //Side Menu
    $('.burgerMenu').click(function(){
      $('#mainNavSide').toggleClass('mainNavSide1') 
      $('#mainNavSide li a').click(function(){
        $('#mainNavSide').removeClass('mainNavSide1')
      })
    })
    //Toggle text
      $('#toggleDugme').click(function(){
        $('#sakrij').removeClass('sakrij1')
        $('#toggleDugme').click(function(){
          $('#sakrij').toggleClass('sakrij1')
        })
      })
});

    
