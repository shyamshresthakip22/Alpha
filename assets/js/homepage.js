const triggerSidebar = document.querySelector('.tooglebarSegment');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.my-backdrop');
const leagueTable = document.querySelector('.gamesTable');
const handiOdds = document.querySelector('.nestedOdds');
const betOdds = document.querySelector('.betOdds');
const extraOdd = document.querySelectorAll('.extraOdd');
const cartItemsWrapper = document.querySelector('.cartItemsWrapper');
const OddsNumber = document.querySelector('.OddsNumber');
const emptyCart = document.querySelector('.emptyCart');
const selectOptions = document.querySelector('.selectOptions');
const col2 = document.querySelector('.column2');
const col3 = document.querySelector('.column3');
// const col5 = document.querySelector('.column5');
// const selectTeam = document.querySelector('.btn1');
const cartWrapper = document.querySelector('.cartWrapper');
const cartBackdrop = document.querySelector('.cartBackdrop');
const noticeCancelBtn = document.querySelector('.noticeCancel');
const slideDeposite = document.querySelector('.slideDeposite')
const depositeDrop = document.querySelector('.depositeDrop')
const infoHistory = document.querySelector('.infoHistory')
const historyDrop = document.querySelector('.my-backdrop3')
const holdings = document.querySelector('.holdings')

const infoDrop = document.querySelector('.my-backdrop4')
const customerDrop1 = document.querySelector('.my-backdrop5')
const backDrop6 = document.querySelector('.my-backdrop6')
const betsDrop = document.querySelector('.my-backdrop7')
const changeInfoBtn = document.querySelector('.changeBtn')
const holdingsbtn = document.querySelector('.holdingsbtn')

const myBetsBtn = document.querySelector('.myBetsBtn')
const customerToggleBtn = document.querySelector('.customerBtn')
const pointExchangeToggleBtn = document.querySelector('.pointExchange')
const slipCancel = document.querySelector('.slipCancel')
const slipCancel1 = document.querySelector('.slipCancel1')
const pointExchange = document.querySelector('.my-backdropPointExchange')
const ExchangeApplication = document.querySelector('.my-backdropExchangeApplication')
const attendBtn = document.querySelector('.my-backdropExchangeAttendBtn')

const OpenRulesPopup = document.querySelector('.my-backdropRules')
const OpenSelectLeaguePopup=document.querySelector('.my-backdropSelectLeague')
const OpenSelectLeaguePopupBtn=document.querySelector('.modal-header')
const refreshBtn = document.getElementById('refresh-btn');
const myPage = document.querySelector('.my-backdropMyPage')
const MyPage = document.querySelector('.Mypage')


const deletepopup = document.querySelector(".changepopup")
const Inputfieldcontainer = document.querySelector(".inputfieldcontainer")
const getMemberInfoBtn=document.getElementById('member-info')
const getMemberInfoPage=document.getElementById('memberInfoPage')
const getBettingLimitBtn=document.getElementById('bettingLimit')
const getBettingLimitPage=document.getElementById('bettingLimitPage')
const getChangePasswordBtn=document.getElementById('changePassword')
const getChangePasswordPage=document.getElementById('changePasswordPage')
const memberInfo=document.querySelector('.Member-Info')
const changePassword=document.querySelector('.Change-Password')
const bettingLimit=document.querySelector('.Betting-Limit')
const Attendancebtn = document.querySelector(".Attendancebtn")
const Inquerybtn = document.querySelector(".Inquerybtn ")
const pointbtn = document.querySelector(".pointbtn ")
const pointexbtn = document.querySelector(".pointexbtn ")
const custrbtn = document.querySelector(".custrbtn ")
const messsagebtn = document.querySelector(".messsagebtn ")

const openpopup = document.querySelector(".changepopup")
// const inputfieldcontainer = document.querySelector(".inputfieldcontainer")
const custompopupcontainer = document.querySelector(".custompopupcontainer")
const closepopup = document.querySelector(".closepopup")
const submitReportBtn  = document.querySelector(".submitReportBtn")
const changepopup1 = document.querySelector(".changepopup1")
const attandececontainer = document.querySelector(".attandececontainer")
const pointexchcontainer = document.querySelector(".pointexchcontainer")
const customercontainer = document.querySelector(".customercontainer")
const inquerycontainer = document.querySelector(".inquerycontainer")
const infoCancel12 = document.querySelector(".infoCancel12")
const infoCancel121 = document.querySelector(".infoCancel121")
const infoCancel1211 = document.querySelector(".infoCancel1211")
const holdingclose = document.querySelector(".holdingclose")
const messagepopup= document.querySelector(".message-popup")


const closeicone = document.querySelector(".closeicone")
const closeIcon = document.querySelector(".closeicone1")
const close = document.querySelector(".close")
const sliderMenu1  = document.querySelector(".sliderMenu ")

const depositeapplication1 = document.querySelector(".depositeapplication1")
const withdrawldetailscontainer = document.querySelector(".withdrawldetailscontainer")
const closeicone1 = document.querySelector(".closeicone")
const NoticeWrapper2 = document.querySelector(".NoticeWrapper2")
const mainHeaderBtn1 = document.querySelector(".mainHeaderBtn1")
const mainHeaderBtn2 = document.querySelector(".mainHeaderBtn2")
const deletebox = document.querySelector(".deletebox")
const questionmarkbox = document.querySelector(".questionmarkbox")
const nobtn = document.querySelector(".nobtn")
const yesbtn = document.querySelector(".yesbtn")
const checkbox = document.querySelector(".checkbox")
const checkbtn = document.querySelector(".checkbtn")
const depositdetails  = document.querySelector(".depositdetails")
const depositeUpHeader2 = document.querySelector(".depositeUpHeader3")
const Withdrawformcontainer = document.querySelector(".Withdrawformcontainer")
const deletebox1 = document.querySelector(".deletebox1")
const questionmarkbox1 = document.querySelector(".questionmarkbox1")
const nobtn1 = document.querySelector(".nobtn1")
const yesbtn1 = document.querySelector(".yesbtn1")
const checkbox1 = document.querySelector(".checkbox1")
const checkbtn1 = document.querySelector(".checkbtn1")
const depositeUpHeader3 = document.querySelector(".depositeUpHeader3")
const removedrwalcontainer = document.querySelector(".removedrwalcontainer")
const closeIconCustom = document.querySelector(".closeIconCustom")
const submitReportBtn1 = document.querySelector(".submitReportBtn1")
const closePopUpCustomer = document.querySelector(".customerCancel2")







removedrwalcontainer.addEventListener("click",function(){
    Withdrawformcontainer.style.display = "none";
})
 
depositeUpHeader3.addEventListener("click",function(){
    Withdrawformcontainer.style.display = "none";
})

checkbtn1.addEventListener("click",function(){
    checkbox1.style.display = "none";
    questionmarkbox1.style.display = "none";
})

nobtn1.addEventListener("click",function(){
    questionmarkbox1.style.display = "none";  
})
yesbtn1.addEventListener("click",function(){
    checkbox1.style.display = "block";
    checkbox1.style.display =  "flex";     
})

deletebox1.addEventListener("click",function(){
    questionmarkbox1.style.display = "block";
    questionmarkbox1.style.display = "flex";
})

depositeUpHeader2.addEventListener("click",function(){
    Withdrawformcontainer.style.display = "block";
})


deletebox.addEventListener("click",function(){
    questionmarkbox.style.display = "block";
    questionmarkbox.style.display = "flex";
})

depositeapplication1.addEventListener("click",function(){
        withdrawldetailscontainer.style.display = "block";
        mainHeaderBtn2.classList.add('depositeActive')

        mainHeaderBtn1.classList.remove('depositeActive')
})
depositdetails.addEventListener("click",function(){
    NoticeWrapper2.style.display = "block";
    withdrawldetailscontainer.style.display = "none";
})
closeicone1.addEventListener("click",function(){
    withdrawldetailscontainer.style.display = "none";
    NoticeWrapper2.style.display = "none";
})
nobtn.addEventListener("click",function(){
    questionmarkbox.style.display = "none";
})
yesbtn.addEventListener("click",function(){
    checkbox.style.display = "block";
    checkbox.style.display =  "flex";
})
checkbtn.addEventListener("click",function(){
        checkbox.style.display = "none";
        questionmarkbox.style.display = "none";
})






 openpopup.addEventListener("click",function(){
     inputfieldcontainer.style.display = "none";
        custompopupcontainer.style.display = "block";
   


  })
  closepopup.addEventListener("click",function(){
       if( custompopupcontainer.style.display == "block"){
        custompopupcontainer.style.display = "none";
       }
       
  })

  submitReportBtn.addEventListener("click",function(){
    inputfieldcontainer.style.display = "block";
  })

  deletepopup.addEventListener("click",function(){
    custompopupcontainer.style.display = "block";
    inputfieldcontainer.style.display = "none";         
})
  
  changepopup1.addEventListener("click",function(){
        custompopupcontainer.style.display = "block";
        inputfieldcontainer.style.display = "none";         
  })
  submitReportBtn1.addEventListener("click",function(){
    backDrop6.style.display = "flex";
    inputfieldcontainer.style.display = "none";         
})
closePopUpCustomer.addEventListener("click",function(){
    backDrop6.style.display = "none";         
})


    //   Attendancebtn popup
    attandececontainer.style.display = "none";
    Attendancebtn.addEventListener("click",function(){
          if(attandececontainer.style.display == "none"){
            attandececontainer.style.display = "block";
            sliderBackDrop.style.display = 'none'
            sliderMenu.classList.remove('sliderMenuActive')
          }
          else{
            sliderMenu1.style.display = "block";
          }
          let attend = document.querySelector('.attend')
        attend.addEventListener('click', function() {
            attendBtn.style.display = 'flex'
            })
            let closePopup = document.querySelector('.noBtn1')
            closePopup.addEventListener('click', function() {
                attendBtn.style.display = 'none'
            })
    })
    
    closeIcon.addEventListener("click",function(){
        attandececontainer.style.display = "none";
    })
        // message
        messagepopup.style.display = "none";
        messsagebtn.addEventListener("click",function(){
              if(messagepopup.style.display == "none"){
                messagepopup.style.display = "block";
                sliderBackDrop.style.display = 'none'
                sliderMenu.classList.remove('sliderMenuActive')
              }
              else{
                sliderMenu1.style.display = "block";
              }
        })
    
        close.addEventListener("click",function(){
            messagepopup.style.display = "none";
        })
     //   Inquery popup

     inquerycontainer.style.display = "none";
     Inquerybtn.addEventListener("click",function(){
           if(inquerycontainer.style.display == "none"){
            inquerycontainer.style.display = "block";
             sliderBackDrop.style.display = 'none'
             sliderMenu.classList.remove('sliderMenuActive')
           }
           else{
             sliderMenu1.style.display = "block";
           }
     })
 
     infoCancel121.addEventListener("click",function(){
        inquerycontainer.style.display = "none";
     })
        //  point popup
        pointexchcontainer.style.display = "none";
        pointbtn.addEventListener("click",function(){
              if(pointexchcontainer.style.display == "none"){
                pointexchcontainer.style.display = "block";
                sliderBackDrop.style.display = 'none'
                sliderMenu.classList.remove('sliderMenuActive')
              }
              else{
                sliderMenu1.style.display = "block";
              }
        })
        infoCancel1211.addEventListener("click",function(){
            pointexchcontainer.style.display = "none";
        })
        // point Exchange popup
        pointexchcontainer.style.display = "none";
        pointexbtn.addEventListener("click",function(){
              if(pointexchcontainer.style.display == "none"){
                pointexchcontainer.style.display = "block";
                sliderBackDrop.style.display = 'none'
                sliderMenu.classList.remove('sliderMenuActive')
              }
              else{
                sliderMenu1.style.display = "block";
              }
        })
        infoCancel1211.addEventListener("click",function(){
            pointexchcontainer.style.display = "none";
        })

        //   Holding 
        holdings.style.display = "none";
        holdingsbtn.addEventListener("click",function(){
              if(holdings.style.display == "none"){
                holdings.style.display = "block";
                sliderBackDrop.style.display = 'none'
                sliderMenu.classList.remove('sliderMenuActive')
              }
              else{
                sliderMenu1.style.display = "block";
              }
        })
        holdingclose.addEventListener("click",function(){
            holdings.style.display = "none";
        })

            //   customer ceneter popup
            customercontainer.style.display = "none";
            custrbtn.addEventListener("click",function(){
                  if(customercontainer.style.display == "none"){
                    customercontainer.style.display = "block";
                    sliderBackDrop.style.display = 'none'
                    sliderMenu.classList.remove('sliderMenuActive')
                  }
                  else{
                    sliderMenu1.style.display = "block";
                  }
            })
            closeIconCustom.addEventListener("click",function(){
                customercontainer.style.display = "none";
            })
            //    My Page popup 
            customercontainer.style.display = "none";
            custrbtn.addEventListener("click",function(){
                  if(customercontainer.style.display == "none"){
                    customercontainer.style.display = "block";
                    sliderBackDrop.style.display = 'none'
                    sliderMenu.classList.remove('sliderMenuActive')
                  }
                  else{
                    sliderMenu1.style.display = "block";
                  }
            })
            closeicone.addEventListener("click",function(){
                customercontainer.style.display = "none";
            })




      // Select League
      OpenSelectLeaguePopupBtn.addEventListener('click', () => {
        sliderBackDrop.style.display = 'none'
        sliderMenu.classList.remove('sliderMenuActive')
        OpenSelectLeaguePopup.style.display = 'flex'
        changeCancel = document.querySelector('.leaguePopupCancel')
        changeCancel.addEventListener('click', () => {
            OpenSelectLeaguePopup.style.display = 'none'
        })
       
    })






let soccerData = [

    {
        League: {
            leagueFlag: 'spain',
            leagueName: 'La Liga',
            leagueRank: 1,
            Game: [

                {
                    gameId: 55555,
                    home: 'FC Barcelona',
                    away: 'Real Madrid',
                    draw: 'draw',
                    time: '7:00',
                    date: '03/10',
                    homeLogo: 'team1',
                    awayLogo: 'team2',
                    bets: [1.55, 2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 6, 1],
                    extra: '+78',
                    allBets: [{
                            title: 'Total First',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: 'Home Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: ' Away Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                    ]
                },
                // {
                //     home: 'Valencia',
                //     away: 'Athletico Madrid',
                //     time: '6:00',
                //     date: '03/10',
                //     homeLogo: 'team2',
                //     awayLogo: 'team4',
                //     bets: [3.5, 3.2, 3.00],
                //     handiBets: [-1.5, 2, 10, 1, 5, 1, 4, 4],
                //     extra: '+78'
                // },

            ],
        }
    },
    {
        League: {
            leagueFlag: 'UEFA',
            leagueName: 'UCL',
            leagueRank: 1,
            Game: [

                {
                    gameId: 11111,
                    home: 'Arsenal FC',
                    away: 'FC Bayern',
                    draw: 'draw',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team3',
                    awayLogo: 'team1',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 1, 7],
                    extra: '+78',
                    allBets: [{
                            title: 'Total second',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: 'Home Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: ' Away Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                    ]
                },
                {
                    gameId: 52134,
                    home: 'Manchester City',
                    away: 'Napoli',
                    draw: 'draw',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team2',
                    awayLogo: 'team3',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 8, 7],
                    extra: '+78',
                    allBets: [{
                            title: 'Total First',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: 'Home Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: ' Away Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                    ]
                },

            ],
        }
    },
    {
        League: {
            leagueFlag: 'italy',
            leagueName: 'Series A',

            leagueRank: 1,

            Game: [

                {
                    gameId: 23345,
                    home: 'AC Milan',
                    away: 'Inter Milan',
                    draw: 'draw',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team1',
                    awayLogo: 'team4',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 2, 7],
                    extra: '+78',
                    allBets: [{
                            title: 'Total First',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: 'Home Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: ' Away Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                    ]
                },
                {
                    gameId: 12345,
                    home: 'Juventus',
                    away: 'AS Roma',
                    draw: 'draw',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team1',
                    awayLogo: 'team3',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 4, 7],
                    extra: '+78',
                    allBets: [{
                            title: 'Total First',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },

                        {
                            title: ' Away Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                    ]
                },

            ],

        }
    },

];

let listCards = [];
let dataArray = [];
let selectedAmount = 0;

function initApp() {
    console.log(soccerData)
    getMemberInfoBtn.addEventListener('click', function(){
        getMemberInfoPage.style.display='block'
        getChangePasswordPage.style.display='none'
        getBettingLimitPage.style.display='none'
    })
    getChangePasswordBtn.addEventListener('click', function(){
        getChangePasswordPage.style.display='block'
        getMemberInfoPage.style.display='none'
        getBettingLimitPage.style.display='none'
    })
    getBettingLimitBtn.addEventListener('click',function(){
        getChangePasswordPage.style.display='none'
        getMemberInfoPage.style.display='none'
        getBettingLimitPage.style.display='block'
    })
    soccerData.forEach((value, key) => {

        //For Refresh Page

        refreshBtn.addEventListener('click', function() {
            location.reload();
          });

          
        //For leagues
        let newDiv = document.createElement('div');
        newDiv.classList.add('leagueTable');
        newDiv.innerHTML = `
        <div class="leagueHeader bbcolor">
        <div class="leagueCol1">

            <img src="assets/images/${value.League.leagueFlag}.png" alt="" width="19" height="14" class="representLogo"> ${value.League.leagueName}</div>
        <div class="leagueCol2">
            <div class="betHeader">Home </div>
            <div class="betHeader">Draw</div>
            <div class="bHeader">Away</div>
        </div>
        <div class="leagueCol3">Handicap</div>
        <div class="leagueCol4">Over/Under</div>
    </div>
   `;

        //remove this comment debug mode
        leagueTable.appendChild(newDiv);

        let games = value.League.Game;
        console.log('games', games)
        games.forEach((val, indx) => {
            // For Games
            let gamesDiv = document.createElement('div');
            gamesDiv.classList.add('leagueFooter');
            gamesDiv.innerHTML = `
        <div class="gameCol1">

        <div class="teamRow1">
            <div class="nestedRow">03/11</div>
            <div class="nestedRow1"> <img src="assets/images/${val.homeLogo}.png" alt="" width="14" height="14" class="representLogo"> ${val.home}</div>
        </div>
        <div class="teamRow1">
            <div class="nestedRow">6:00</div>
            <div class="nestedRow1"> <img src="assets/images/${val.awayLogo}.png" alt="" width="14" height="14" class="representLogo"> ${val.away}</div>
        </div>

    </div>
    <div class="gameCol2">
        <div class="betOdds" id="${indx}-${key}-1-1-wl">${val.bets[0]} </div>
        <div class="betOdds" id="${indx}-${key}-1-2-wl">${val.bets[1]}</div>
        <div class="betOdds" id="${indx}-${key}-1-3-wl">${val.bets[2]}</div>
    </div>
    <div class="gameCol3">
        <div class="handiOdds"id="${indx}-${key}-1-1-hc" >
            <div class="nestedOdds fontOrange" id="${indx}-${key}-1-1-hc">${val.handiBets[0]}</div>
            <div class="nestedOdds" id="${indx}-${key}-1-1-hc">${val.handiBets[1]}</div>
        </div>
        <div class="handiOdds" id="${indx}-${key}-2-1-hc">
            <div class="nestedOdds fontOrange" id="${indx}-${key}-2-1-hc"> ${val.handiBets[2]}</div>
            <div class="nestedOdds" id="${indx}-${key}-2-1-hc">${val.handiBets[3]}</div>
        </div>


    </div>
    <div class="gameCol4">
        <div class="ouOdds" id="${indx}-${key}-1-2-ou">
            <div class="nestedOdds fontRed" id="${indx}-${key}-1-2-ou">${val.handiBets[4]}</div>
            <div class="nestedOdds" id="${indx}-${key}-1-2-ou">${val.handiBets[5]}</div>
        </div>
        <div class="ouOdds" id="${indx}-${key}-2-2-ou">
            <div class="nestedOdds fontBlue" id="${indx}-${key}-2-2-ou">${val.handiBets[6]}</div>
            <div class="nestedOdds" id="${indx}-${key}-2-2-ou">${val.handiBets[7]}</div>
        </div>
        
    </div>

    <div class="gameCol5">
    <div class="extraOdd" id="${indx}-${key}">${val.extra}</div>
    </div>
    <div class="gameOdds"></div>
</div>
   `;
            //remove this comment debug mode
            leagueTable.appendChild(gamesDiv);
            let accorDiv = document.createElement('div')
            accorDiv.setAttribute('id', `${indx}${key}`)
            accorDiv.classList.add('accordionOdd');

            accorDiv.innerHTML = `
    <div class="extraOddsContainer${indx}${key}">
    </div>
                `
            leagueTable.appendChild(accorDiv);
            console.log('val', val.allBets)
            let allOdds = val.allBets;

            let reps = allOdds.length
            console.log('reps', reps)
            for (i = 0; i < reps; i++) {


                let allBetsDiv = document.createElement('div');
                allBetsDiv.classList.add('extraOddsBody');
                allBetsDiv.innerHTML = `
                    
                    <div class="oddsHeader fontBlue">${allOdds[i].title}</div>
                    <div class="oddsFooter">
                    </div>
                    `
                const extraOddsContainer = document.querySelector(`.extraOddsContainer${indx}${key}`);

                //remove this comment
                extraOddsContainer.appendChild(allBetsDiv)

                const totalOdds = allOdds[i].totalBlocks
                    // console.log('all odds here', totalOdds)
                    // console.log('here again')
                totalOdds.forEach((val, index) => {
                    let allBetsDiv = document.createElement('div');
                    allBetsDiv.classList.add('finalOddWrapper');
                    allBetsDiv.innerHTML = `
                        <div class="odds1" id="${indx}-${key}">${val.oddName}   <span class="highlightOdd">
                        ${val.odds}
                        </span>
                        </div>
                    `
                    const oddsFooter = document.querySelectorAll('.oddsFooter');
                    for (let i = 0; i < oddsFooter.length; i++) {

                        oddsFooter[i].appendChild(allBetsDiv)
                    }
                    //remove this comment

                })


            }


        })








    })

    // function selectOdds() {
    //     handiOdds.classList.toggle('betActive');
    // }
    // console.log(handiOdds)
    // handiOdds.addEventListener('click', selectOdds);
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    cartItemsWrapper.innerHTML = ''
    let cartNumber = document.querySelector('.cartNumber')
    let totalPayout = document.querySelector('.OddsNumberAmnt')
    let totalPrice = selectedAmount;




    cartNumber.innerHTML = dataArray.length
    if (dataArray.length > 0) {
        emptyCart.style.display = 'none';
    } else {
        emptyCart.style.display = 'flex'
    }

    let totalOdds = 1;
    dataArray.forEach((value, key) => {
        totalOdds = totalOdds * parseFloat(value.odds);
        // count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('cartItem')
            newDiv.innerHTML = `
            <div class="line1">
        <div class="leftWrapper">

            <img src="assets/images/${value.leagueLogo}.png" alt="" width="14" height="14" class="representLogo">${value.leagueName}
        </div>

        <div class="exitLogo" id="${key}">
            <i class="bi bi-x-lg"></i>
        </div>
    </div>
    <div class="line2">
        <span class="fontBlue">

            ${value.matchTime} 
        </span> ${value.matchType}
    </div>
    <div class="line3">${value.fullGame}</div>
    <div class="line4 fontBlue">${value.teamName}
    <div class="oddsLine fontBlue">
    ${value.odds}
</div>
    </div>
                `;
            cartItemsWrapper.appendChild(newDiv);
        }
    })
    OddsNumber.innerText = totalOdds.toLocaleString();
    totalPayout.innerHTML = selectedAmount * totalOdds
        // quantity.innerText = count;
}


//Deposite popUp







// noticeCancelBtn.addEventListener('click', function() {
//     backDrop.style.display = 'none'

// })


const loginBtn = document.querySelector('.loginBtn')
const sliderMenu = document.querySelector('.sliderMenu')
const sliderBackDrop = document.querySelector('.sliderMenuBackDrop')

loginBtn.addEventListener('click', function() {
    sliderMenu.classList.add('sliderMenuActive')
    sliderBackDrop.style.display = 'block'
})

sliderBackDrop.addEventListener('click', () => {
    sliderMenu.classList.remove('sliderMenuActive')
    sliderBackDrop.style.display = 'none'
})


const sliderCancel = document.querySelector('.sliderCancel')
sliderCancel.addEventListener('click', () => {
    sliderMenu.classList.remove('sliderMenuActive')
    sliderBackDrop.style.display = 'none'
})



cartWrapper.addEventListener('click', function() {
    cartBackdrop.style.display = 'flex'
    col3.style.display = 'flex'
    col3.style.zIndex = 3
    const betSlip = document.querySelector('.betSlip')
    betSlip.classList.add('betSlipActive')
    slipCancel.addEventListener('click', () => {
        cartBackdrop.style.display = 'none'
        col3.style.display = ''
        col3.style.zIndex = 1
    })
})


// selectTeam.addEventListener('click', function() {
//     cartBackdrop.style.display = 'flex'
//     col5.style.display = 'flex'
//     col5.style.zIndex = 3
//     const selectTeam = document.querySelector('.selectTeam')
//     selectTeam.classList.add('.selectTeamActive')


//     slipCancel1.addEventListener('click', () => {
//         cartBackdrop.style.display = 'none'
//         col5.style.display = ''
//         col5.style.zIndex = 1
//     })

// })


cartBackdrop.addEventListener('click', function() {
    cartBackdrop.style.display = 'none'
    col3.style.display = ''
    col3.style.zIndex = 1
})




const accord = document.querySelectorAll('.accordionOdd')




// extraOdd.addEventListener('click', function() {
//     accord.classList.toggle('accordionActive')
// })


function setActiveButton(id) {
    // remove active class from all buttons

    let accord = document.getElementById(`${id}`);
    accord.classList.toggle('accordionActive')
        // const accordionOdd = document.querySelectorAll('.accordionOdd')
        // accordionOdd.forEach(btn => btn.classList.remove('accordionActive'));

    // // add active class to the clicked button
    // accordi.classList.add('accordionActive');
}

function setActiveOdd(button) {
    // remove active class from all buttons
    const buttons = document.querySelectorAll('.betOdds')
    const buttons2 = document.querySelectorAll('.handiOdds')
    const buttons3 = document.querySelectorAll('.ouOdds')
    buttons.forEach(btn => btn.classList.remove('betActive'));
    buttons2.forEach(btn => btn.classList.remove('betActive'));
    buttons3.forEach(btn => btn.classList.remove('betActive'));

    // add active class to the clicked button
    button.classList.add('betActive');
}

function setActiveOdd2(button) {
    // remove active class from all buttons
    const buttons = document.querySelectorAll('.betOdds')

    const buttons2 = document.querySelectorAll('.handiOdds')
    const buttons3 = document.querySelectorAll('.ouOdds')
    buttons.forEach(btn => btn.classList.remove('betActive'));
    buttons2.forEach(btn => btn.classList.remove('betActive'));
    buttons3.forEach(btn => btn.classList.remove('betActive'));

    // add active class to the clicked button
    button.classList.add('betActive');
}

function setActiveOdd3(button) {
    // remove active class from all buttons
    const buttons = document.querySelectorAll('.betOdds')
    const buttons2 = document.querySelectorAll('.handiOdds')
    const buttons3 = document.querySelectorAll('.ouOdds')
    buttons.forEach(btn => btn.classList.remove('betActive'));
    buttons2.forEach(btn => btn.classList.remove('betActive'));
    buttons3.forEach(btn => btn.classList.remove('betActive'));

    // add active class to the clicked button
    button.classList.add('betActive');
}

col2.addEventListener('click', (event) => {
    let cartNumber = document.querySelector('.cartNumber')
    // Check if the clicked element is a button with the desired class
    if(event.target.classList.contains('betOdds') ){
        if(event.target.style.backgroundColor==="rgb(54, 60, 68)")
        {
            event.target.style.backgroundColor="#27303a"
            event.target.style.border = "none";
            // console.log('Hello Umar');

        }else{
            event.target.style.backgroundColor="rgb(54, 60, 68)"
            event.target.style.border = "1px solid #F8FF13";


        }
    }
    if(event.target.classList.contains('handiOdds')){
        if(event.target.style.backgroundColor==="rgb(54, 60, 68)")
        {
            event.target.style.backgroundColor="#27303a"
            event.target.style.border = "none";
        }else{
            event.target.style.backgroundColor="rgb(54, 60, 68)"
            event.target.style.border = "1px solid #F8FF13";


        }
    }
    if(event.target.classList.contains('ouOdds')){
        if(event.target.style.backgroundColor==="rgb(54, 60, 68)")
        {
            event.target.style.backgroundColor="#27303a"
            event.target.style.border = "none";
        }else{
            event.target.style.backgroundColor="rgb(54, 60, 68)"
            event.target.style.border = "1px solid #F8FF13";

        }
    }
    
    if (event.target.classList.contains('odds1')) {
        // Handle the button click here
        console.log('Button clicked:', event.target);
        if(event.target.style.backgroundColor==="rgb(54, 60, 68)")
        {
            event.target.style.backgroundColor="#27303a"
            event.target.style.border = "none";
        }else{
            event.target.style.backgroundColor="rgb(54, 60, 68)"
            event.target.style.border = "thick solid #F8FF13";

        }
        // setActiveButton(event.target);
        event.target.classList.toggle('betActive');
        // Toggle the 'button-active' class on the clicked button element

        const gameIndex = event.target.id.split('-')[0]
        const leagueIndex = event.target.id.split('-')[1]
            // const oddIndex = event.target.id.split('-')[2]


        // const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 3 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
        const leagueName = soccerData[leagueIndex].League.leagueName;
        const leagueLogo = soccerData[leagueIndex].League.leagueFlag;
        const fullGame = soccerData[leagueIndex].League.Game[gameIndex].home + ' vs ' + soccerData[leagueIndex].League.Game[gameIndex].away;
        const matchType = '1x2';
        const matchTime = 'Live';
        const rawContent = event.target.textContent.split(' ')
        const cleanedArr = rawContent.filter(str => str.trim() !== '');
        const selectedOdd = parseFloat(cleanedArr.pop());
        const teamName = cleanedArr.join(' ');
        //  selectedOdd = 0;
        //  teamName = '';
        // if (event.target.classList.contains('dice')) {
        //     teamName = event.target.id.split('-')[1]
        //     const rawContent = event.target.textContent.split(' ')
        //     const cleanedArr = rawContent.filter(str => str.trim() !== '');
        //     selectedOdd = parseFloat(cleanedArr.pop());

        // } else {
        //     const rawContent = event.target.textContent.split(' ')
        //     const cleanedArr = rawContent.filter(str => str.trim() !== '');
        //     selectedOdd = parseFloat(cleanedArr.pop());
        //     teamName = cleanedArr.join(' ');
        // }









        const id = soccerData[leagueIndex].League.Game[gameIndex].gameId + selectedOdd + matchTime + matchType + teamName;



        let newObject = {
            id: id, // generate unique id 
            leagueLogo: leagueLogo,
            leagueName: leagueName,
            odds: selectedOdd,
            teamName: teamName,
            fullGame: fullGame,
            matchType: matchType,
            matchTime: matchTime
        };
        let popup = document.querySelector('.limitPopUp')
        let totalOdds = selectedOdd;

        dataArray.forEach((value, key) => {
            totalOdds = totalOdds * parseFloat(value.odds);

        })
        if (totalOdds < 100) {
            popup.style.display = 'none'
            if (dataArray.some(obj => obj.id === id)) {
                dataArray = dataArray.filter(obj => obj.id !== id);
            } else {
                dataArray.push(newObject);
            }

        } else {
            popup.style.display = 'flex'
        }
        reloadCard();





    }
});

memberInfo.addEventListener('click', () => {

    memberInfo.classList.add('historyUpHeaderActive')
    changePassword.classList.remove('historyUpHeaderActive')
    bettingLimit.classList.remove('historyUpHeaderActive')

})
changePassword.addEventListener('click', () => {
    
    changePassword.classList.add('historyUpHeaderActive')
    memberInfo.classList.remove('historyUpHeaderActive')
    bettingLimit.classList.remove('historyUpHeaderActive')


   
})
bettingLimit.addEventListener('click', () => {
    
    bettingLimit.classList.add('historyUpHeaderActive')
    memberInfo.classList.remove('historyUpHeaderActive')
    changePassword.classList.remove('historyUpHeaderActive')

   
})

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.handiOdds');
    const ouButtons = document.querySelectorAll('.ouOdds');
    const betOdds = document.querySelectorAll('.betOdds');
    const extraOdd = document.querySelectorAll('.extraOdd');
    const leagueCol2 = document.querySelectorAll('.leagueCol2');
    const leagueCol3 = document.querySelectorAll('.leagueCol3');
    const leagueCol4 = document.querySelectorAll('.leagueCol4');
    const slipBody = document.querySelector('.slipBody')
    const gameCol2 = document.querySelectorAll('.gameCol2');
    const gameCol3 = document.querySelectorAll('.gameCol3');
    const gameCol4 = document.querySelectorAll('.gameCol4');
    const empty = document.querySelector('.emptyAll');
    const selectAmount = document.querySelectorAll('.amount1');
    const maxAmnt = document.querySelector('.maxAmnt');
    const resetAmnt = document.querySelector('.resetAmnt');



    maxAmnt.addEventListener('click', () => {
        selectedAmount = 100
        reloadCard();
    })
    resetAmnt.addEventListener('click', () => {
        selectedAmount = 0
        reloadCard();
    })
    selectAmount.forEach((amount) => {
        amount.addEventListener('click', (event) => {
            // Remove the commas from the string using the replace method
            const numStr = event.target.textContent.replace(/,/g, '');

            // Convert the string into an integer using the parseInt method
            const num = parseInt(numStr);
            selectedAmount = num
            console.log(selectedAmount)
            reloadCard();
        })
    })

    empty.addEventListener('click', () => {
        console.log('here')
        let popup = document.querySelector('.limitPopUp')
        let totalOdds = document.querySelector('.OddsNumber')
        if (totalOdds > 100) {
            popup.style.display = 'flex'
        }
        popup.style.display = 'none'
        dataArray.splice(0, dataArray.length)
        reloadCard();
    })

    slipBody.addEventListener('click', (event) => {

        if (event.target.parentNode.matches('.exitLogo')) {
            let id = event.target.parentNode.id;
            console.log('from here', id)
            dataArray.splice(id, 1)
            let popup = document.querySelector('.limitPopUp')
            let totalOdds = document.querySelector('.OddsNumber')
            if (totalOdds > 100) {
                popup.style.display = 'flex'
            }
            popup.style.display = 'none'
            reloadCard();
        } else {
            console.log('sad', event.target)
        }
    })

    //Point Exchange Popup

    pointExchangeToggleBtn.addEventListener('click', () => {
            sliderBackDrop.style.display = 'none'
            sliderMenu.classList.remove('sliderMenuActive')
            pointExchange.style.display = 'flex'
            changeCancel = document.querySelector('.infoCancel12')
            changeCancel.addEventListener('click', () => {
                pointExchange.style.display = 'none'
            })
            
            let ExhangeApplicationBtn = document.querySelector('.ExchangeApplicationBtn')
        ExhangeApplicationBtn.addEventListener('click', function() {
            ExchangeApplication.style.display = 'flex'
            })

            let closeNoPopup = document.querySelector('.noBtn')
            closeNoPopup.addEventListener('click', function() {
                ExchangeApplication.style.display = 'none'
                pointExchange.style.display = 'none'

            })

            let openRules = document.querySelector('.infoRules')
            openRules.addEventListener('click', function() {
                OpenRulesPopup.style.display = 'flex'
            })

            let closeRules = document.querySelector('.RulesBtn')
            closeRules.addEventListener('click', function() {
                OpenRulesPopup.style.display = 'none'
            })

        })

    //*********** */
    MyPage.addEventListener('click', () => {
        sliderBackDrop.style.display = 'none'
        sliderMenu.classList.remove('sliderMenuActive')
        myPage.style.display = 'flex'
        changeCancels = document.querySelector('.CancelMyPage')
        changeCancels.addEventListener('click', () => {
            myPage.style.display = 'none'
        })
        
        let ExhangeApplicationBtn = document.querySelector('.ExchangeApplicationBtn')
    ExhangeApplicationBtn.addEventListener('click', function() {
        ExchangeApplication.style.display = 'flex'
        })

       
    })
    //*********** */
    myBetsBtn.addEventListener('click', () => {
        betsDrop.style.display = 'flex'
        sliderBackDrop.style.display = 'none'
        sliderMenu.classList.remove('sliderMenuActive')
        changeCancel = document.querySelector('#cancel7')
        changeCancel.addEventListener('click', () => {
            betsDrop.style.display = 'none'
        })

        let totalPage = 10

        let e = document.querySelector('#mini1')
        let pageLimit = e.options[e.selectedIndex].text
        e.addEventListener('change', () => {
            pageLimit = e.value

        })
        let pgN = document.querySelector('#miniPN1');
        let lBtn = document.querySelector('#lbtn1')
        let rBtn = document.querySelector('#rbtn1')

        const left = () => {
            pageNo = pageNo - 1;
            pgN.innerHTML = pageNo
            if (pageNo == 1) {
                lBtn.classList.add('deactive')
                rBtn.classList.remove('deactive')
            }
            if (pageNo + 1 == totalPage) {
                rBtn.classList.add('deactive')
                lBtn.classList.remove('deactive')
            }
            if (pageNo != 1) {
                rBtn.classList.remove('deactive')
                lBtn.classList.remove('deactive')
            }
        }

        const right = () => {
            pageNo = pageNo + 1;
            pgN.innerHTML = pageNo
            if (pageNo == 1) {
                lBtn.classList.add('deactive')
                rBtn.classList.remove('deactive')
            }
            if (pageNo != 1) {
                rBtn.classList.remove('deactive')
                lBtn.classList.remove('deactive')
            }
            if (pageNo + 1 == totalPage) {
                rBtn.classList.add('deactive')
                lBtn.classList.remove('deactive')
            }


        }
        lBtn.addEventListener('click', left)
        rBtn.addEventListener('click', right)
        console.log(pageNo)

    })
    customerToggleBtn.addEventListener('click', () => {
            sliderBackDrop.style.display = 'none'
            sliderMenu.classList.remove('sliderMenuActive')
            customerDrop1.style.display = 'flex'
            const changeCancel = document.querySelector('.customerCancel1')
            const footer = document.querySelectorAll('#footer5')
            const input = document.querySelector('#input5')
            changeCancel.addEventListener('click', () => {
                customerDrop1.style.display = 'none'
            })

            const btn1 = document.querySelector('.submitReportBtn')
            const btn2 = document.querySelector('.submitIssueBtn')
            btn1.addEventListener('click', () => {
                customerDrop2.style.display = 'flex'
                const changeCancel = document.querySelector('.customerCancel2')
                changeCancel.addEventListener('click', () => {
                    customerDrop2.style.display = 'none'
                })
            })
            footer.forEach((footer) => {
                footer.addEventListener('click', () => {
                    customerDrop2.style.display = 'flex'

                    const changeCancel = document.querySelector('.customerCancel2')
                    changeCancel.addEventListener('click', () => {
                        customerDrop2.style.display = 'none'
                    })
                })
            })

            btn2.addEventListener('click', () => {
                customerDrop2.style.display = 'none'
            })
        })
        //Deposite Popup
    slideDeposite.addEventListener('click', () => {
        depositeDrop.style.display = 'flex';
        sliderBackDrop.style.display = 'none'
        sliderMenu.classList.remove('sliderMenuActive')

        const mainHeaderBtn1 = document.querySelector('.depositeUpHeader1')
        const mainHeaderBtn2 = document.querySelector('.depositeUpHeader2')

        mainHeaderBtn1.addEventListener('click', function() {

            mainHeaderBtn1.classList.add('depositeActive')

            mainHeaderBtn2.classList.remove('depositeActive')
            let noticeBody = document.querySelector('.noticeBodyNew')
            let nextWindow = document.createElement('div')
            nextWindow.classList.add('depositeItem')
            let oldWindow = document.querySelector('.withdrawlItem')


            nextWindow.innerHTML = `
            <div class="menuItem">
                                <div class="dispIcon specDisp">Type</div>
                                <div class="dispIcon">
                                    <select name="options" id="" class="selectOptions2">
                                        <option value="">Cash</option>
                                        <option value="">Bitcoin</option>
                                        <option value="">Wireless</option>
                                    </select>
                                </div>
                            </div>
                            <div class="menuItem">
                                <div class="dispIcon specDisp">Home of Depositor</div>
                                <div class="dispIcon">Helios Predator</div>
                            </div>
                            <div class="menuItem">
                                <div class="dispIcon specDisp">Amount</div>
                                <div class="dispIcon inputSports"><input type="text" name="amount" id="" placeholder="Please type in the deposite amount" class="inputLeague"></div>
                            </div>
                            <div class="menuItem">
                                <div class="dispIcon specDisp">Apply for Bonus</div>
                                <div class="dispIcon"> <select name="options" id="" class="selectOptions2">
                                    <option value="">Cash</option>
                                    <option value="">Bitcoin</option>
                                    <option value="">Wireless</option>
                                </select></div>
                            </div>
                            <div class="depositeBtn2">
                                <div class="noticeBtn">Deposite Bill</div>
                            </div>
                            <div class="depositeHistory">
                                <div class="historyHeader">Deposite History</div>
                                <div class="headerItem">
                                    <div class="hd1">Select</div>
                                    <div class="hd2">Date</div>
                                    <div class="hd3">Type</div>
                                    <div class="hd4">Amount</div>
                                    <div class="hd5">Status</div>
                                </div>
                                <div class="footerItem">
                                    <div class="hd1"><input type="checkbox" name="" id=""></div>
                                    <div class="hd2">2023-03-18 19:32:56</div>
                                    <div class="hd3">CASH</div>
                                    <div class="hd4">30,000</div>
                                    <div class="hd5 fontBlue">Approved</div>
                                </div>
                                <div class="footerItem">
                                    <div class="hd1"><input type="checkbox" name="" id=""></div>
                                    <div class="hd2">2023-03-12 9:32:56</div>
                                    <div class="hd3">CASH</div>
                                    <div class="hd4">30,000</div>
                                    <div class="hd5 fontRed">Rejected</div>
                                </div>
                            </div>
        
           
            `

            noticeBody.replaceChild(nextWindow, oldWindow)

        })
        mainHeaderBtn2.addEventListener('click', function() {

            mainHeaderBtn2.classList.add('depositeActive')

            mainHeaderBtn1.classList.remove('depositeActive1')
            let noticeBody = document.querySelector('.noticeBodyNew')
            let nextWindow = document.createElement('div')
            nextWindow.classList.add('withdrawlItem')
            let oldWindow = document.querySelector('.depositeItem')


            nextWindow.innerHTML = `
            <div class="menuItem">
                <div class="dispIcon specDisp">Balance</div>
                <div class="dispIcon">
                    14,500
                </div>
            </div>
            <div class="menuItem">
                <div class="dispIcon specDisp">Account Holder</div>
                <div class="dispIcon">Helios Predator</div>
            </div>
            <div class="menuItem">
                <div class="dispIcon specDisp">Amount</div>
                <div class="dispIcon inputSports"><input type="text" name="amount"  placeholder="Please type in the deposite amount" class="inputLeague"></div>
            </div>
            <div class="menuItem">
                <div class="dispIcon specDisp">Withdrawl Password</div>
    
                <div class="dispIcon inputSports"><input type="password" name="amount"  placeholder="Please enter your withdrawl password" class="inputLeague"></div>
    
            </div>
    
            <div class="depositeBtn2">
                <div class="noticeBtn">Withdrawl Request</div>
            </div>
            <div class="depositeHistory">
                <div class="historyHeader">Withdrawl History</div>
                <div class="headerItem">
                    <div class="hd1">Select</div>
                    <div class="hd2">Date</div>
                    <div class="hd3">Method</div>
                    <div class="hd4">Amount</div>
                    <div class="hd5">Status</div>
                </div>
                <div class="footerItem">
                    <div class="hd1"><input type="checkbox" name="" id=""></div>
                    <div class="hd2">2023-03-18 19:32:56</div>
                    <div class="hd3">CASH</div>
                    <div class="hd4">30,000</div>
                    <div class="hd5 fontBlue">Approved</div>
                </div>
                <div class="footerItem">
                    <div class="hd1"><input type="checkbox" name="" id=""></div>
                    <div class="hd2">2023-03-12 9:32:56</div>
                    <div class="hd3">CASH</div>
                    <div class="hd4">30,000</div>
                    <div class="hd5 fontRed">Rejected</div>
                </div>
            </div>
        
           
            `

            noticeBody.replaceChild(nextWindow, oldWindow)

        })

        let depositeCancelBtn = document.querySelector('.depositeCancel')
        depositeCancelBtn.addEventListener('click', function() {
            depositeDrop.style.display = 'none'

        })


    })

    selectOptions.addEventListener('change', function() {

        if (selectOptions.value == 'winner') {

            for (let i = 0; i < leagueCol3.length; i++) {
                leagueCol3[i].style.display = 'none';
                leagueCol4[i].style.display = 'none';
                for (let i = 0; i < gameCol3.length; i++) {

                    gameCol3[i].style.display = 'none';
                    gameCol4[i].style.display = 'none';
                }
            }
            for (let i = 0; i < leagueCol2.length; i++) {
                leagueCol2[i].style.display = 'flex';

                for (let i = 0; i < gameCol2.length; i++) {

                    gameCol2[i].style.display = 'flex';

                }
            }
        }
        if (selectOptions.value == 'handicap') {

            for (let i = 0; i < leagueCol2.length; i++) {
                leagueCol2[i].style.display = 'none';
                leagueCol4[i].style.display = 'none';
                for (let i = 0; i < gameCol2.length; i++) {

                    gameCol2[i].style.display = 'none';
                    gameCol4[i].style.display = 'none';
                }
            }
            for (let i = 0; i < leagueCol3.length; i++) {
                leagueCol3[i].style.display = 'flex';

                for (let i = 0; i < gameCol3.length; i++) {

                    gameCol3[i].style.display = 'flex';

                }
            }

        }
        if (selectOptions.value == 'overUnder') {

            for (let i = 0; i < leagueCol3.length; i++) {
                leagueCol3[i].style.display = 'none';
                leagueCol2[i].style.display = 'none';
                for (let i = 0; i < gameCol3.length; i++) {

                    gameCol3[i].style.display = 'none';
                    gameCol2[i].style.display = 'none';
                }
            }
            for (let i = 0; i < leagueCol4.length; i++) {
                leagueCol4[i].style.display = 'flex';

                for (let i = 0; i < gameCol4.length; i++) {

                    gameCol4[i].style.display = 'flex';

                }
            }
        }
        // else {
        //     // Show all the league columns
        //     for (let i = 0; i < leagueCol34.length; i++) {
        //         console.log('here')
        //         leagueCol34[i].style.display = '';
        //     }
        // }

        // switch (selectOptions.value) {
        //     case 'winner':
        //         leagueCol3.style.display = 'none';
        //         leagueCol4.style.display = 'none';
        //         gameCol3.style.display = 'none';
        //         gameCol4.style.display = 'none';
        //         break;
        //     case 'handicap':
        //         leagueCol2.style.display = 'none';
        //         leagueCol4.style.display = 'none';
        //         gameCol2.style.display = 'none';
        //         gameCol4.style.display = 'none';
        //         break;
        //     case 'overUnder':
        //         leagueCol2.style.display = 'none';
        //         leagueCol3.style.display = 'none';
        //         gameCol2.style.display = 'none';
        //         gameCol3.style.display = 'none';
        //         break;
        //     default:
        //         console.log('here')
        // }
    });


    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element
            setActiveOdd2(event.target)
            const gameIndex = event.target.id.split('-')[0]
            const leagueIndex = event.target.id.split('-')[1]
            const oddIndex = event.target.id.split('-')[2]
            console.log('odd Inddd', oddIndex)
            const leagueName = soccerData[leagueIndex].League.leagueName;
            const leagueLogo = soccerData[leagueIndex].League.leagueFlag;
            const fullGame = soccerData[leagueIndex].League.Game[gameIndex].home + ' vs ' + soccerData[leagueIndex].League.Game[gameIndex].away;
            const matchType = 'Handicap';
            const matchTime = 'Prematch';
            const rawContent = event.target.textContent.split(' ')
            const cleanedArr = rawContent.filter(str => str.trim() !== '');
            const selectedOdd = parseFloat(cleanedArr.pop());
            const sameOdd = gameIndex + leagueIndex + event.target.id.split('-')[3]


            const teamOdd = cleanedArr.join(' ');
            const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 2 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
            const finalName = `${teamName}  (${teamOdd})`
            const id = gameIndex + leagueIndex + sameOdd + oddIndex + event.target.id.split('-')[4]
            const uniqueIndex = gameIndex + leagueIndex + event.target.id.split('-')[4]
            console.log(id)

            let newObject = {
                id: id, // generate unique id 
                leagueLogo: leagueLogo,
                sameOdd: uniqueIndex,
                leagueName: leagueName,
                odds: selectedOdd,
                teamName: finalName,
                fullGame: fullGame,
                matchType: matchType,
                matchTime: matchTime
            };
            let popup = document.querySelector('.limitPopUp')
            let totalOdds = selectedOdd;

            dataArray.forEach((value, key) => {
                totalOdds = totalOdds * parseFloat(value.odds);

            })

            if (totalOdds < 100) {
                popup.style.display = 'none'
                if (dataArray.some(obj => obj.sameOdd === uniqueIndex)) {
                    dataArray = dataArray.filter(obj => obj.sameOdd !== uniqueIndex);
                    dataArray.push(newObject)
                } else {
                    dataArray.push(newObject)
                }
            } else {
                popup.style.display = 'flex'
            }

            // if (dataArray.some(obj => obj.sameOdd === sameOdd)) {
            //     dataArray = dataArray.filter(obj => obj.sameOdd !== sameOdd)
            // }
            reloadCard();
            // const exitLogo = document.querySelectorAll('.exitLogo')
            // exitLogo.forEach((exit) => {
            //     exit.addEventListener('click', (event) => {
            //         let index = event.target.parentNode.id;
            //         dataArray.splice(index, 1)
            //         reloadCard();
            //         console.log(dataArray)
            //     })
            // })



        });
    });
    ouButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element
            setActiveOdd3(event.target)
            const gameIndex = event.target.id.split('-')[0]
            const leagueIndex = event.target.id.split('-')[1]
            const oddIndex = event.target.id.split('-')[2]
            console.log('odd Inddd', oddIndex)
            const leagueName = soccerData[leagueIndex].League.leagueName;
            const leagueLogo = soccerData[leagueIndex].League.leagueFlag;
            const fullGame = soccerData[leagueIndex].League.Game[gameIndex].home + ' vs ' + soccerData[leagueIndex].League.Game[gameIndex].away;
            const matchType = 'Over/Under';
            const matchTime = 'Prematch';
            const rawContent = event.target.textContent.split(' ')
            const cleanedArr = rawContent.filter(str => str.trim() !== '');
            const selectedOdd = parseFloat(cleanedArr.pop());
            const sameOdd = gameIndex + leagueIndex + event.target.id.split('-')[3]

            const teamOdd = cleanedArr.join(' ');
            const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 2 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
            const finalName = `${teamName}  (${teamOdd})`
            const id = gameIndex + leagueIndex + sameOdd + oddIndex + event.target.id.split('-')[4]
            const uniqueIndex = gameIndex + leagueIndex + event.target.id.split('-')[4]
            console.log(id)

            let newObject = {
                id: id, // generate unique id 
                leagueLogo: leagueLogo,
                sameOdd: uniqueIndex,
                leagueName: leagueName,
                odds: selectedOdd,
                teamName: finalName,
                fullGame: fullGame,
                matchType: matchType,
                matchTime: matchTime
            };
            let popup = document.querySelector('.limitPopUp')
            let totalOdds = selectedOdd;

            dataArray.forEach((value, key) => {
                totalOdds = totalOdds * parseFloat(value.odds);

            })
            if (totalOdds < 100) {
                popup.style.display = 'none'
                if (dataArray.some(obj => obj.sameOdd === uniqueIndex)) {
                    dataArray = dataArray.filter(obj => obj.sameOdd !== uniqueIndex);
                    dataArray.push(newObject)
                } else {
                    dataArray.push(newObject)
                }
            } else {
                popup.style.display = 'flex'
            }

            // if (dataArray.some(obj => obj.sameOdd === sameOdd)) {
            //     dataArray = dataArray.filter(obj => obj.sameOdd !== sameOdd)
            // }
            reloadCard();
            // const exitLogo = document.querySelectorAll('.exitLogo')
            // exitLogo.forEach((exit) => {
            //     exit.addEventListener('click', (event) => {
            //         let index = event.target.parentNode.id;
            //         dataArray.splice(index, 1)
            //         reloadCard();
            //         console.log(dataArray)
            //     })
            // })



        });
    });
    betOdds.forEach(function(betOdds) {
        betOdds.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element
            setActiveOdd(event.target);
            const gameIndex = event.target.id.split('-')[0]
            const leagueIndex = event.target.id.split('-')[1]
            const sameOdd = gameIndex + leagueIndex + event.target.id.split('-')[2]
            const oddIndex = event.target.id.split('-')[3]


            const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 3 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
            const leagueName = soccerData[leagueIndex].League.leagueName;
            const leagueLogo = soccerData[leagueIndex].League.leagueFlag;
            const fullGame = soccerData[leagueIndex].League.Game[gameIndex].home + ' vs ' + soccerData[leagueIndex].League.Game[gameIndex].away;
            const matchType = '1x2';
            const matchTime = 'Prematch';
            const selectedOdd = betOdds.textContent

            const id = gameIndex + leagueIndex + sameOdd + oddIndex + event.target.id.split('-')[4]
            const uniqueIndex = gameIndex + leagueIndex + event.target.id.split('-')[4]
            console.log(selectedOdd)
            let newObject = {

                id: id, // generate unique id 
                sameOdd: uniqueIndex,
                leagueLogo: leagueLogo,
                leagueName: leagueName,
                odds: selectedOdd,
                teamName: teamName,
                fullGame: fullGame,
                matchType: matchType,
                matchTime: matchTime
            };
            console.log('unq', uniqueIndex)

            let popup = document.querySelector('.limitPopUp')
            let totalOdds = selectedOdd;

            dataArray.forEach((value, key) => {
                totalOdds = totalOdds * parseFloat(value.odds);

            })
            if (totalOdds < 100) {
                popup.style.display = 'none'
                if (dataArray.some(obj => obj.sameOdd === uniqueIndex)) {
                    dataArray = dataArray.filter(obj => obj.sameOdd !== uniqueIndex);
                    dataArray.push(newObject)
                } else {
                    dataArray.push(newObject)
                }
            } else {
                popup.style.display = 'flex'
            }

            // if (dataArray.some(obj => obj.sameOdd === sameOdd)) {
            //     dataArray = dataArray.filter(obj => obj.sameOdd !== sameOdd)
            //     dataArray.push(newObject)
            // }

            reloadCard();
            // push the new object into the array
            console.log(dataArray)

            // const exitLogo = document.querySelectorAll('.exitLogo')
            // exitLogo.forEach((exit) => {
            //     exit.addEventListener('click', (event) => {
            //         let index = event.target.parentNode.id;
            //         dataArray.splice(index, 1)
            //         reloadCard();
            //         console.log(dataArray)
            //     })
            // })



        });
    });
    extraOdd.forEach(function(extraOdd) {
        extraOdd.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element
            extraOdd.classList.toggle('betActive')
            let id = event.target.id.split('-').join('')
            setActiveButton(id)



        });
    });

});




// triggerSidebar.addEventListener('click', moveElement);

// extraOdd.addEventListener('click', selectOdds);
// betOdds.addEventListener('click', selectOdds);