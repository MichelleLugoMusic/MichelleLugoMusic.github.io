var Y=Object.defineProperty,_=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var B=(t,n,o)=>n in t?Y(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,d=(t,n)=>{for(var o in n||(n={}))L.call(n,o)&&B(t,o,n[o]);if(f)for(var o of f(n))P.call(n,o)&&B(t,o,n[o]);return t},g=(t,n)=>_(t,G(n));var F=(t,n)=>{var o={};for(var r in t)L.call(t,r)&&n.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&f)for(var r of f(t))n.indexOf(r)<0&&P.call(t,r)&&(o[r]=t[r]);return o};import{j as i,S as u,a as e,T as h,L as b,A as E,R as S,G as c,b as W,M as O,I as V,F as q,Y as N,c as K,d as J,e as m,f as Q,g as v,t as k,B as s,h as X,i as w,k as z,P as x,H as Z,l as ee,m as p,n as te,o as ne,p as ie,C as oe}from"./vendor.81ae6a2d.js";const le=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const I of a.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&r(I)}).observe(document,{childList:!0,subtree:!0});function o(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=o(l);fetch(l.href,a)}};le();var re="/assets/homepic_cropped.3a346786.jpeg";const D=r=>{var l=r,{icon:t,text:n}=l,o=F(l,["icon","text"]);return i(u,g(d({direction:"row",color:"white",alignItems:"center"},o),{children:[t,e(h,{fontFamily:"Yaldevi",flexDirection:"row",children:n})]}))},T=({icon:t,link:n,hoverColor:o})=>e(b,{href:n,children:e(E,{sx:{bgcolor:"common.grayLighter",marginRight:3,"&:hover":{bgcolor:o},transition:"all 0.2s ease-in-out"},children:t})}),C={textDecoration:"none",fontFamily:"Yaldevi",color:"white",userSelect:"none"},M={textDecoration:"none",fontFamily:"Yaldevi",color:"black",userSelect:"none"},y=()=>{const[t,n]=S.useState(null),o=Boolean(t),r=a=>{n(a.currentTarget)},l=()=>{n(null)};return i(c,{children:[i(c,{container:!0,sx:{backgroundColor:"common.lavender"},justifyContent:"space-around",alignItems:"center",p:1,children:[i(u,{direction:"row",children:[e(D,{icon:e(W,{sx:{marginRight:1}}),text:"Boston, US",marginRight:5}),e(D,{icon:e(O,{sx:{marginRight:1}}),text:"michellelugomusic@gmail.com"})]}),i(u,{direction:"row",children:[e(T,{icon:e(V,{}),hoverColor:"#cd42e7",link:"https://www.instagram.com/michellelugomusic/"}),e(T,{icon:e(q,{}),hoverColor:"#3c5798",link:"https://www.facebook.com/BoriPianist/"}),e(T,{icon:e(N,{}),hoverColor:"#cc181e",link:"https://www.youtube.com/channel/UC2l5sd_oygx9-e5aCSSs87g"})]})]}),e(K,{position:"sticky",color:"transparent",elevation:0,children:i(J,{sx:{justifyContent:"center"},children:[e(h,{mr:3,children:e(m,{to:"/",style:C,children:"Home"})}),e(h,{mr:3,children:e(m,{to:"/biography",style:C,children:"Biography"})}),e(h,{mr:3,onMouseEnter:r,style:{cursor:"pointer"},onClick:r,children:e("div",{style:C,children:"Portfolio"})}),i(Q,{color:"common.gray",id:"basic-menu",anchorEl:t,open:o,onClose:l,MenuListProps:{"aria-labelledby":"basic-button",onMouseLeave:l},children:[e(v,{onClick:l,children:e(m,{to:"/film_music",style:M,children:"Film Music"})}),e(v,{onClick:l,children:e(m,{to:"/musical_theater",style:M,children:"Musical Theater"})}),e(v,{onClick:l,children:e(m,{to:"/video_games",style:M,children:"Video Games"})}),e(v,{onClick:l,children:e(m,{to:"/arrangements",style:M,children:"Arrangements"})})]})]})})]})},ae=()=>i(c,{style:{backgroundImage:`url(${re})`,backgroundSize:"auto 100%",backgroundPosition:"center",width:"100vw",height:"100vh",backgroundRepeat:"no-repeat",backgroundColor:"black"},display:"flex",flexDirection:"column",children:[e(y,{}),i("div",{style:{flex:.55,backgroundColor:"clear",display:"flex",alignItems:"center",marginTop:"15%",flexDirection:"row",justifyContent:"center"},children:[e("div",{style:{textAlign:"center",fontFamily:"Merienda",color:"white",fontSize:"6vw",lineHeight:"10vh",marginRight:"3vw"},children:"Michelle Lugo"}),e("div",{style:{fontFamily:"Yaldevi",color:"white",fontSize:"2vw",marginTop:"1vw"},children:"Composer | Arranger | Producer"})]})]});var ce=`[main]
backgroundPic = "https://michellelugomusic.github.io/MichelleLugoMusicResources/biographypic_cropped.jpeg"
profilePic = "https://michellelugomusic.github.io/MichelleLugoMusicResources/profpicsmall.jpeg"
text = '''
## Hi!

My name is **Michelle Lugo**, and I'm a Berklee College of Music
alumni. My major was composition, arranging and production, and I
have a minor in music technology. I was always interested in music
since I was four years when I begged my mother to buy me a piano.
Since then, I've learned to play classical piano at a conservatory
and picked up other instruments like guitar, bass and voice.
Through my experience in music, I wanted to start composing and
arranging, and I started that at 15. When got into Berklee, I knew
that I wanted to expand my creativity to make music and be able to
learn different stuff with it like recording, mixing and
arranging. I have made arrangements for big shows at Berklee, and
I want to have different projects involving creating for other
people and for myself.

## Why do I love music?

I love music because it\u2019s more than just a passion; it\u2019s something
that defines me. It brings out my creative side, and it\u2019s
something I don\u2019t get tired of. Music makes the world a better
place, and I intend to make the world a better place through
music.

## Portfolio\u2026
'''

[portfolio.link]
text = "Go to my portfolio"
url = "film_music"

[contact]
text = "If you have any questions or would like to get in touch, you can reach me via"

[[contact.links]]
text = "Email"
url = "mailto:cmlugo27@gmail.com"

[[contact.links]]
text = "Facebook"
url = "https://www.facebook.com/BoriPianist/"

[[contact.links]]
text = "Instagram"
url = "https://www.instagram.com/michellelugomusic/"`;const se={fontFamily:"Merienda",color:"white",fontSize:"6vw",lineHeight:"10vh"},he={fontWeight:"bold",fontSize:"1.8vw",lineHeight:"1rem",color:"white"},H={color:"white",fontSize:"1.1vw",letterSpacing:"0.1rem",wordSpacing:"0.04rem",lineHeight:"1.6rem",marginTop:"1.5%"},de=()=>{const t=k.parse(ce);return console.log(t),console.log(t.contact.links.length),i("div",{children:[i(c,{style:{backgroundImage:`url(${t.main.backgroundPic})`,backgroundBlendMode:"multiply",backgroundSize:"auto 100%",backgroundPosition:"center",width:"100vw",height:"90vh",backgroundRepeat:"no-repeat",backgroundColor:"lightgray"},display:"flex",flexDirection:"column",children:[e(y,{}),e("div",{style:{width:"100%",flex:3,backgroundColor:"clear",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"0%"}}),e("div",{style:{width:"100%",flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e("div",{style:se,children:"Biography"})})]}),e(c,{style:{backgroundSize:"auto 100%",backgroundPosition:"center",width:"100vw",height:"140vh",backgroundRepeat:"no-repeat"},sx:{backgroundColor:"common.dark_lavender"},display:"flex",flexDirection:"column",children:i(u,{direction:"column",sx:{marginTop:"8%",marginLeft:"8.5%",marginRight:"35%",alignItems:"left"},children:[e("div",{style:{display:"flex"},children:e("img",{src:t.main.profilePic})}),i(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white"},children:[e(s,{sx:H,children:e(X,{children:t.main.text})}),e("a",{href:t.portfolio.link.url,style:{textDecoration:"none"},children:e(s,{sx:g(d({},he),{color:"black",textDecoration:"none",":hover":{color:"white"}}),children:t.portfolio.link.text})}),e("br",{}),i(s,{sx:H,children:[t.contact.text,t.contact.links.map((n,o)=>i(w,{children:[o==0?" ":o==t.contact.links.length-1?", or ":", ",e(b,{style:{color:"#9b9b9b",textDecoration:"none"},href:n.url,children:n.text})]}))]})]})]})})]})};var ge="/assets/MusicMenusPic.02c0b7af.jpeg";const ue=()=>e("div",{children:i(c,{style:{backgroundImage:`url(${ge})`,backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundPosition:"center",width:"100vw",height:"90vh",backgroundRepeat:"no-repeat",backgroundColor:"lightgray"},display:"flex",flexDirection:"column",children:[e(y,{}),e("div",{style:{width:"100%",flex:3,backgroundColor:"clear",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"0%"}}),e("div",{style:{width:"100%",flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e("div",{style:{fontFamily:"Merienda",color:"white",fontSize:"12vh",lineHeight:"10vh"},children:"Arrangements"})})]})});var me=`[main]
backgroundPic = "https://michellelugomusic.github.io/MichelleLugoMusicResources/MusicMenusPic.jpeg"

[[entries]]
title = "Rings come and go"
desc = '''
I have made a musical, called Bathroom Breakup, of just three songs
about two girls on elementary school fighting over a boy. On the
first song, she enters the bathroom, and goes through her TikTok
only to see her ex making a new TikTok with another girl, which is
his new girlfriend. She starts singing of the shock.
'''
link = "https://michellelugomusic.github.io/MichelleLugoMusicResources/Rings-come-and-go.mp3"

[[entries]]
title = "You better duck"
desc = '''
In the second song, she enters the bathroom and they start fighting
about him.
'''
link = "https://michellelugomusic.github.io/MichelleLugoMusicResources/You-better-duck.mp3"

[[entries]]
title = "Sister for life"
desc = '''
In the third song, another girl enters the bathroom and tells them
to not fight over a boy, that there are more important things out
there than fight for a boy. And the story ends there.
'''
link = "https://michellelugomusic.github.io/MichelleLugoMusicResources/Sister-for-life-2.mp3"

[[extras]]
desc = '''
I have also made a second musical, in which it\u2019s still in progress but you can follow along on our instagram:
'''
link = "https://www.instagram.com/willwilsonsavestheworldmusical/"
`;const pe={fontFamily:"Merienda",color:"white",fontSize:"6vw",lineHeight:"10vh"},ye={fontWeight:"bold",fontSize:"1.8vw",lineHeight:"1rem",color:"white"},R={color:"white",fontSize:"1.1vw",letterSpacing:"0.1rem",wordSpacing:"0.04rem",lineHeight:"1.6rem",marginTop:"1.5%"},fe=()=>{const t=k.parse(me);return console.log(t),i("div",{children:[i(c,{style:{backgroundImage:`url(${t.main.backgroundPic})`,backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundPosition:"center",width:"100vw",height:"90vh",backgroundRepeat:"no-repeat",backgroundColor:"lightgray"},display:"flex",flexDirection:"column",children:[e(y,{}),e("div",{style:{width:"100%",flex:3,backgroundColor:"clear",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"0%"}}),e("div",{style:{width:"100%",flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e("div",{style:pe,children:"Musical Theater"})})]}),e(c,{style:{backgroundSize:"auto 100%",backgroundPosition:"center",width:"100vw",height:"140vh",backgroundRepeat:"no-repeat"},sx:{backgroundColor:"common.dark_lavender"},display:"flex",flexDirection:"column",children:i(u,{direction:"column",sx:{marginTop:"8%",marginLeft:"8.5%",marginRight:"35%",alignItems:"left"},children:[e("div",{style:{display:"flex"}}),t.entries.map(n=>i(w,{children:[i(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white"},children:[e(s,{sx:ye,children:n.title}),e("br",{}),e(s,{sx:R,children:n.desc})]}),e(z,{height:"10vh",url:n.link,controls:!0}),e("br",{})]})),e("br",{}),e("br",{}),e("br",{}),e("br",{}),t.extras.map(n=>e(w,{children:i(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white"},children:[e(s,{sx:R,children:n.desc}),e("br",{}),e(b,{href:"mailto:cmlugo27@gmail.com",sx:g(d({},R),{fontWeight:"bold",fontSize:"1.3vw",color:"black",textDecoration:"none",":hover":{color:"white"}}),children:n.link}),e("br",{})]})}))]})})]})};var be=`
[main]
backgroundPic = "https://michellelugomusic.github.io/MichelleLugoMusicResources/MusicMenusPic.jpeg"
title = "Video game compositions"

[theAudioventure]
title = "The Audioventure"
body = '''
Check out my latest video game project, a playlist-themed game in which I composed a theme for the places \u201CBeach\u201D, \u201CParty\u201D, and \u201CThrough the clouds\u201D.
'''

[soundcloud]
title = "Best tracks"
body = '''
My top 5 tracks hosted on soundcloud
'''
linkText = "https://soundcloud.com/michelle-lugo-386819351/sets/best-tracks"
linkUrl = "https://soundcloud.com/michelle-lugo-386819351/sets/best-tracks"

[[games]]
title = "Gourd Getaway"
body = '''
My track is on the last two levels of the game.
'''
linkText = "https://elijahcobb.itch.io/gourdgetaway"
linkUrl = "https://elijahcobb.itch.io/gourdgetaway"
picUrl = "https://michellelugomusic.github.io/MichelleLugoMusicResources/GourdGetaway.png"

[[games]]
title = "Pancakescape"
body = '''
There are three composers on this track, and our tracks play randomly.
'''
linkText = "https://caiojmini.itch.io/pancakescape"
linkUrl = "https://caiojmini.itch.io/pancakescape"
picUrl = "https://michellelugomusic.github.io/MichelleLugoMusicResources/Pancakescape.png"

[[games]]
title = "Doughmentum"
body = '''
I did the main menu music and all the sfx on this game.
'''
linkText = "https://ahrtxv.itch.io/dough-mentum"
linkUrl = "https://ahrtxv.itch.io/dough-mentum"
picUrl = "https://michellelugomusic.github.io/MichelleLugoMusicResources/Doughmentum.png"

[[games]]
title = "Bob the Bomber"
body = '''
Was responsible for all music and sfx on this game.
'''
linkText = "https://restartgame.itch.io/bob-the-bomber"
linkUrl = "https://restartgame.itch.io/bob-the-bomber"
picUrl = "https://michellelugomusic.github.io/MichelleLugoMusicResources/BobTheBomber.png"

[[games]]
title = "Boomerang attack"
body = '''
I did all the music and sfx on this game, as well as gave most of the ideas to create this game.
'''
linkText = "https://devpenguingames.itch.io/boomerang-attack"
linkUrl = "https://devpenguingames.itch.io/boomerang-attack"
picUrl = "https://michellelugomusic.github.io/MichelleLugoMusicResources/BoomerangAttack.png"

[[games]]
title = "Lost colors"
body = '''
I did all music/sfx.
'''
linkText = "https://globalgamejam.org/2021/games/lost-colors-2-0"
linkUrl = "https://globalgamejam.org/2021/games/lost-colors-2-0"
picUrl = "https://michellelugomusic.github.io/MichelleLugoMusicResources/LostColors.png"

[[games]]
title = "I have seen your dog"
body = '''
I did music
'''
linkText = "https://v3.globalgamejam.org/2021/games/i-have-seen-your-dog-7"
linkUrl = "https://v3.globalgamejam.org/2021/games/i-have-seen-your-dog-7"
picUrl = "https://michellelugomusic.github.io/MichelleLugoMusicResources/IHaveSeenYourDog.png"
`;const ve={fontFamily:"Merienda",color:"white",fontSize:"6vw",lineHeight:"10vh"},U={fontWeight:"bold",fontSize:"1.8vw",lineHeight:"1rem",color:"white"},j={color:"white",fontSize:"1.1vw",letterSpacing:"0.1rem",wordSpacing:"0.04rem",lineHeight:"1.6rem",marginTop:"1.5%"},ke=()=>{const t=k.parse(be);return i("div",{children:[i(c,{style:{backgroundImage:`url(${t.main.backgroundPic})`,backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundPosition:"center",width:"100vw",height:"90vh",backgroundRepeat:"no-repeat",backgroundColor:"lightgray"},display:"flex",flexDirection:"column",children:[e(y,{}),e("div",{style:{width:"100%",flex:3,backgroundColor:"clear",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"0%"}}),e("div",{style:{width:"100%",flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e("div",{style:ve,children:"Video Games"})})]}),e(c,{style:{backgroundSize:"auto 100%",backgroundPosition:"center",width:"100vw",height:"140vh",backgroundRepeat:"no-repeat"},sx:{backgroundColor:"common.dark_lavender"},display:"flex",flexDirection:"column",children:i(u,{direction:"column",sx:{marginTop:"8%",marginLeft:"8.5%",marginRight:"35%",alignItems:"left"},children:[e("div",{style:{display:"flex"}}),e(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white",marginBottom:"10%"},children:e(s,{sx:{fontWeight:"bold",fontSize:"3.5vw",lineHeight:"1rem",color:"white"},children:"Video game compositions"})}),i(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white"},children:[e(s,{sx:U,children:"The Audioventure"}),e(s,{sx:j,children:"Check out my latest video game project, a playlist-themed game in which I composed a theme for the places \u201CBeach\u201D, \u201CParty\u201D, and \u201CThrough the clouds\u201D."})]}),e("iframe",{title:"Inline Frame Example",src:"https://the-audioventure.github.io/The-Audioventure/#/Home",style:{width:"70vw",height:"50vh",borderStyle:"inset",borderWidth:"0.2vw",marginTop:"1.5%",marginBottom:"2%"}}),i("div",{style:{display:"flex",width:"70vw",height:"50vh",marginTop:"2%"},children:[e("div",{style:{display:"flex",width:"50%",height:"100%"},children:e(z,{url:"https://soundcloud.com/michelle-lugo-386819351/sets/best-tracks?color=#FFFFFF",config:{soundcloud:{options:{single_active:!1}}}})}),e("div",{style:{width:"50%",flex:1,margin:"auto"},children:e($,{title:"Best tracks",desc:"My top 5 tracks hosted on soundcloud",link:"https://soundcloud.com/michelle-lugo-386819351/sets/best-tracks"})})]}),t?t.games.map(n=>e(w,{children:e(A,{imgSrc:n.picUrl,title:n.title,desc:n.body,linkUrl:n.linkUrl,linkText:n.linkText})})):null,e("br",{})]})})]})},A=({imgSrc:t,title:n,desc:o,linkUrl:r,linkText:l})=>i("div",{style:{display:"flex",width:"70vw",height:"50vh",marginTop:"5%"},children:[e("div",{style:{width:"70%",flex:1,objectFit:"contain",borderStyle:"inset",borderWidth:"0.2vw",boxSizing:"content-box",lineHeight:0,display:"block"},children:e("img",{style:{width:"100%",height:"100%",objectFit:"cover"},src:t})}),e("div",{style:{width:"50%",flex:1,margin:"auto"},children:e($,{title:n,desc:o,linkUrl:r,linkText:l})})]}),$=({title:t,desc:n,linkUrl:o,linkText:r})=>i(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white",flexWrap:"wrap",display:"flex"},children:[e(s,{sx:g(d({},U),{marginLeft:"10%"}),children:t}),e(s,{sx:g(d({},j),{marginLeft:"10%",marginTop:"4vh",width:"100%"}),children:n}),e(b,{href:o,sx:g(d({},j),{color:"black",marginLeft:"10%",":hover":{color:"white"},textDecoration:"none",marginTop:"4vh",width:"100%"}),children:r})," "]});A.propTypes={imgSrc:x.string.isRequired,title:x.string.isRequired,desc:x.string.isRequired,link:x.string.isRequired};var we=`[main]
backgroundPic = "https://michellelugomusic.github.io/MichelleLugoMusicResources/MusicMenusPic.jpeg"`;const xe={fontFamily:"Merienda",color:"white",fontSize:"6vw",lineHeight:"10vh"},Me=()=>{const t=k.parse(we);return console.log(t),e("div",{children:i(c,{style:{backgroundImage:`url(${t.main.backgroundPic})`,backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundPosition:"center",width:"100vw",height:"90vh",backgroundRepeat:"no-repeat",backgroundColor:"lightgray"},display:"flex",flexDirection:"column",children:[e(y,{}),e("div",{style:{width:"100%",flex:3,backgroundColor:"clear",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"0%"}}),e("div",{style:{width:"100%",flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e("div",{style:xe,children:"Film Music"})})]})})};function Ie(){return S.useEffect(()=>{document.title="Michelle Lugo Music",document.body.style.backgroundColor="#5E6687"}),e(Z,{children:i(ee,{children:[e(p,{path:"/",element:e(ae,{})}),e(p,{path:"biography",element:e(de,{})}),e(p,{path:"arrangements",element:e(ue,{})}),e(p,{path:"musical_theater",element:e(fe,{})}),e(p,{path:"video_games",element:e(ke,{})}),e(p,{path:"film_music",element:e(Me,{})})]})})}const Se={lavender:"#5e6687aa",dark_lavender:"#5E6687",grayLighter:"rgba(255, 255, 255, 0.10)"},Te=te({palette:{common:Se}});ne.render(e(S.StrictMode,{children:i(ie,{theme:Te,children:[e(oe,{}),e(Ie,{})]})}),document.getElementById("root"));
