const app = new Vue({
    el:'#root',
    data:{
        header:{
              titleTop:'Everything about lifestyle, Travel and Gadgets! ',
              logo:'images/logo-default-slim.png',
              linkTop:['SIGN IN','ABOUNT US','CONCACT US', 'BUY NOW'],
              links:[
                'HOME','ELEMENTS','FEATURES','PAGES','PORTFOLIO', 'BLOG','SHOP',
              ],
             
              
        },
        imgBox:['images/blog-46.jpg','images/blog-47.jpg','images/blog-48.jpg','images/blog-49.jpg','images/blog-50.jpg','images/blog-51.jpg'],
        txtButtons:['photography','Gadgets','Travel','LifeStyle','travel','recipes'],
         txtBox:[
            'How to Take Better Concert Pictures in 30 seconds',
            'Gadgets that Make your SmartPhone Even smarter ',
            '20 top-reted Tourist Attraction in ManHattan ',
            'the best wey to ride motorcycle',
            '5 fun things to do at the Beach',
            'Amazingly Fresh fruit And herb drinks for summer\'s',

         ],
         linkPost:[

            {
                title:'POPULAR PHOTOS',
                 post:[
                    {img:'images/blog-55.jpg',descrizione:'Simple Ways to Have a pretty Face',dat:'January 12, 2019'},
                    {img:'images/blog-56.jpg',descrizione:'Ranking the greatest Players in basketBall',dat:'January 12, 2019'},
                    {img:'images/blog-57.jpg',descrizione:'4 Ways to Look Cool in Glasses',dat:'January 12, 2019'},
                    {img:'images/blog-58.jpg',descrizione:'Top Camper trailer Towing Tips',dat:'January 12, 2019'},
                    {img:'images/blog-59.jpg',descrizione:'5 Lovely Walks in New York',dat:'January 12, 2019'},
                 ],
                  subTitle:['1','2','3','4','5'],
             },
             {
                title:'RECENT POTHOS',
                post:[
                    {img:'images/blog-65.jpg',descrizione:'Main Reasons To Stop Texting And Driving',dat:'January 12, 2019'},
                    {img:'images/blog-66 (1).jpg',descrizione:'Tips to Help You Quickly Prepare Your Lunch',dat:'January 12, 2019'},
                    {img:'images/blog-67.jpg',descrizione:'Why Should i buy a smartwatch',dat:'January 12, 2019'},
                    {img:'images/blog-68.jpg',descrizione:'The best augmented reality smartglasses',dat:'January 12, 2019'},
                    {img:'images/blog-69.jpg',descrizione:'12 Healthies Food to Eat fo BreakFast',dat:'January 12, 2019'},
                    

                    ],
               
                    
             }
          ],
          buttonCenter:[
            'GADGETS','PHOTOGRAPHY','LIFESTYLE','FASHION','RECIPES','TRAVEL'
          ],
          socialFoto:[
            '29739607_2020680068220520_4509928046932787200_n','30087804_253872848488989_8792603541668626432_n','29415620_196477127626244_3250318472361541632_n','30078414_1274410412703843_8290935809419247616_n','30077195_2066750973610181_3733150062893596672_n','29415304_166583630713703_1032667922171953152_n'
          ],
          fotoUltimo:[
            'blog-13.jpg','blog-16.jpg','blog-20.jpg','blog-23.jpg','blog-29.jpg','blog-40.jpg'
          ],
          pages:[
            '<','1','2','3','>'
          ]
        
           
           


    },
  
})