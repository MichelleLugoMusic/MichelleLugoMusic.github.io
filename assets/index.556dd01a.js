var Y=Object.defineProperty,_=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(n,t,i)=>t in n?Y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i,m=(n,t)=>{for(var i in t||(t={}))P.call(t,i)&&j(n,i,t[i]);if(v)for(var i of v(t))L.call(t,i)&&j(n,i,t[i]);return n},p=(n,t)=>_(n,G(t));var B=(n,t)=>{var i={};for(var r in n)P.call(n,r)&&t.indexOf(r)<0&&(i[r]=n[r]);if(n!=null&&v)for(var r of v(n))t.indexOf(r)<0&&L.call(n,r)&&(i[r]=n[r]);return i};import{P as g,j as o,S as b,a as e,T as h,L as k,A as E,R as x,t as u,G as c,b as W,M as q,I as O,F as V,Y as N,c as K,d as J,e as M,f as Q,g as f,h as X,B as s,i as Z,k as F,H as ee,l as ne,m as w,n as te,o as ie,p as oe,C as le}from"./vendor.f4335e29.js";const re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=i(l);fetch(l.href,a)}};re();const T=r=>{var l=r,{icon:n,text:t}=l,i=B(l,["icon","text"]);return o(b,p(m({direction:"row",color:"white",alignItems:"center"},i),{children:[n,e(h,{style:{fontSize:"100%",lineHeight:"1vw",color:"white"},fontFamily:"Yaldevi",flexDirection:"row",children:t})]}))};T.propTypes={icon:g.element.isRequired,text:g.string.isRequired,width:g.string};const I=({icon:n,link:t,hoverColor:i})=>e(k,{href:t,children:e(E,{sx:{bgcolor:"common.grayLighter",marginRight:3,"&:hover":{bgcolor:i},transition:"all 0.2s ease-in-out"},children:n})});var U=`[contact]
location = '''
Boston, US
'''
email = '''
michellelugomusic@gmail.com
'''
instagram = '''
https://www.instagram.com/michellelugomusic/
'''
facebook = '''
https://www.facebook.com/BoriPianist/
'''
youtube = '''
https://www.youtube.com/channel/UC2l5sd_oygx9-e5aCSSs87g
'''

[navigate.home]
subpage = '''
home
'''
text = '''
Home
'''

[navigate.biography]
subpage = '''
biography
'''
text = '''
Biography
'''

[navigate.portfolio]
text = '''
Portfolio
'''

[[navigate.portfolio.entries]]
subpage = '''
film_music
'''
text = '''
Film Music
'''

[[navigate.portfolio.entries]]
subpage = '''
musical_theater
'''
text = '''
Musical Theater
'''

[[navigate.portfolio.entries]]
subpage = '''
video_games
'''
text = '''
Video Games
'''

[[navigate.portfolio.entries]]
subpage = '''
arrangements
'''
text = '''
Arrangements
'''

`;const S={textDecoration:"none",fontFamily:"Yaldevi",color:"white",userSelect:"none"},ae={textDecoration:"none",fontFamily:"Yaldevi",color:"black",userSelect:"none"},y=()=>{const[n,t]=x.useState(null),i=Boolean(n),r=d=>{t(d.currentTarget)},l=()=>{t(null)},a=u.parse(U);return o(c,{children:[o(c,{container:!0,sx:{backgroundColor:"common.lavender"},justifyContent:"space-around",alignItems:"center",p:"1.3vh",children:[o(b,{direction:"row",children:[e(T,{icon:e(W,{sx:{width:"5vw",marginRight:1}}),text:"Boston, US",marginRight:5,width:"40%"}),e(T,{icon:e(q,{sx:{marginRight:1}}),text:"michellelugomusic@gmail.com"})]}),o(b,{direction:"row",children:[e(I,{icon:e(O,{}),hoverColor:"#cd42e7",link:a.contact.instagram}),e(I,{icon:e(V,{}),hoverColor:"#3c5798",link:a.contact.facebook}),e(I,{icon:e(N,{}),hoverColor:"#cc181e",link:a.contact.youtube})]})]}),e(K,{position:"sticky",color:"transparent",elevation:0,children:o(J,{sx:{justifyContent:"center"},children:[e(h,{mr:3,children:e(M,{to:`/${a.navigate.home.subpage}`,style:S,children:a.navigate.home.text})}),e(h,{mr:3,children:e(M,{to:`/${a.navigate.biography.subpage}`,style:S,children:a.navigate.biography.text})}),e(h,{mr:3,onMouseEnter:r,style:{cursor:"pointer"},onClick:r,children:e("div",{style:S,children:a.navigate.portfolio.text})}),e(Q,{color:"common.gray",id:"basic-menu",anchorEl:n,open:i,onClose:l,MenuListProps:{"aria-labelledby":"basic-button",onMouseLeave:l},children:a.navigate.portfolio.entries.map(d=>e(f,{children:e(X,{onClick:l,children:e(M,{to:`/${d.subpage}`,style:ae,children:d.text})})}))})]})})]})};var ce=`[main]
backgroundPic = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/homepic_cropped.jpeg
'''
name = '''
Michelle Lugo
'''
title = '''
Composer | Arranger | Producer
'''`;const z=()=>{const n=u.parse(ce);return o(c,{style:{backgroundImage:`url(${n.main.backgroundPic})`,backgroundSize:"auto 100%",backgroundPosition:"center",width:"100vw",height:"100vh",backgroundRepeat:"no-repeat",backgroundColor:"black"},display:"flex",flexDirection:"column",children:[e(y,{}),o("div",{style:{flex:.55,backgroundColor:"clear",display:"flex",alignItems:"center",marginTop:"15%",flexDirection:"row",justifyContent:"center"},children:[e("div",{style:{textAlign:"center",fontFamily:"Merienda",color:"white",fontSize:"6vw",lineHeight:"10vh",marginRight:"3vw"},children:n.main.name}),e("div",{style:{fontFamily:"Yaldevi",color:"white",fontSize:"2vw",marginTop:"1vw"},children:n.main.title})]})]})};var se=`[main]
title = '''
Biography
'''
backgroundPic = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/biographypic_cropped.jpeg
'''
profilePic = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/profpicsmall.jpeg
'''
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
text = '''
Go to my portfolio
'''
url = '''
film_music
'''

[contact]
text = '''
If you have any questions or would like to get in touch, you can reach me via
'''

[[contact.links]]
text = '''
Email
'''
url = '''
mailto:cmlugo27@gmail.com
'''

[[contact.links]]
text = '''
Facebook
'''
url = '''
https://www.facebook.com/BoriPianist/
'''

[[contact.links]]
text = '''
Instagram
'''
url = '''
https://www.instagram.com/michellelugomusic/
'''`;const he={fontFamily:"Merienda",color:"white",fontSize:"6vw",lineHeight:"10vh"},de={fontWeight:"bold",fontSize:"1.8vw",lineHeight:"1rem",color:"white"},H={color:"white",fontSize:"1.1vw",letterSpacing:"0.1rem",wordSpacing:"0.04rem",lineHeight:"1.6rem",marginTop:"1.5%"},ge=()=>{const n=u.parse(se);return console.log(n),console.log(n.contact.links.length),o("div",{children:[o(c,{style:{backgroundImage:`url(${n.main.backgroundPic})`,backgroundBlendMode:"multiply",backgroundSize:"auto 100%",backgroundPosition:"center",width:"100vw",height:"90vh",backgroundRepeat:"no-repeat",backgroundColor:"lightgray"},display:"flex",flexDirection:"column",children:[e(y,{}),e("div",{style:{width:"100%",flex:3,backgroundColor:"clear",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"0%"}}),e("div",{style:{width:"100%",flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e("div",{style:he,children:n.main.title})})]}),e(c,{style:{backgroundSize:"auto 100%",backgroundPosition:"center",width:"100vw",height:"140vh",backgroundRepeat:"no-repeat"},sx:{backgroundColor:"common.dark_lavender"},display:"flex",flexDirection:"column",children:o(b,{direction:"column",sx:{marginTop:"8%",marginLeft:"8.5%",marginRight:"35%",alignItems:"left"},children:[e("div",{style:{display:"flex"},children:e("img",{src:n.main.profilePic})}),o(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white"},children:[e(s,{sx:H,children:e(Z,{children:n.main.text})}),e("a",{href:n.portfolio.link.url,style:{textDecoration:"none"},children:e(s,{sx:p(m({},de),{color:"black",textDecoration:"none",":hover":{color:"white"}}),children:n.portfolio.link.text})}),e("br",{}),o(s,{sx:H,children:[n.contact.text,n.contact.links.map((t,i)=>o(f,{children:[i==0?" ":i==n.contact.links.length-1?", or ":", ",e(k,{style:{color:"#9b9b9b",textDecoration:"none"},href:t.url,children:t.text})]}))]})]})]})})]})};var ue=`[main]
backgroundPic = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/MusicMenusPic.jpeg
'''
title = '''
Arrangements
'''
`;const me={fontFamily:"Merienda",color:"white",fontSize:"6vw",lineHeight:"10vh"},pe=()=>{const n=u.parse(ue);return console.log(n),e("div",{children:o(c,{style:{backgroundImage:`url(${n.main.backgroundPic})`,backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundPosition:"center",width:"100vw",height:"90vh",backgroundRepeat:"no-repeat",backgroundColor:"lightgray"},display:"flex",flexDirection:"column",children:[e(y,{}),e("div",{style:{width:"100%",flex:3,backgroundColor:"clear",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"0%"}}),e("div",{style:{width:"100%",flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e("div",{style:me,children:n.main.title})})]})})};var be=`[main]
backgroundPic = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/MusicMenusPic.jpeg
'''

[[entries]]
title = '''
Rings come and go
'''
desc = '''
I have made a musical, called Bathroom Breakup, of just three songs
about two girls on elementary school fighting over a boy. On the
first song, she enters the bathroom, and goes through her TikTok
only to see her ex making a new TikTok with another girl, which is
his new girlfriend. She starts singing of the shock.
'''
link = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/Rings-come-and-go.mp3
'''

[[entries]]
title = '''
You better duck
'''
desc = '''
In the second song, she enters the bathroom and they start fighting
about him.
'''
link = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/You-better-duck.mp3
'''

[[entries]]
title = '''
Sister for life
'''
desc = '''
In the third song, another girl enters the bathroom and tells them
to not fight over a boy, that there are more important things out
there than fight for a boy. And the story ends there.
'''
link = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/Sister-for-life-2.mp3
'''

[[extras]]
desc = '''
I have also made a second musical, in which it\u2019s still in progress but you can follow along on our instagram:
'''
linkUrl = '''
https://www.instagram.com/willwilsonsavestheworldmusical/
'''
linkText = '''
https://www.instagram.com/willwilsonsavestheworldmusical/
'''
`;const fe={fontFamily:"Merienda",color:"white",fontSize:"6vw",lineHeight:"10vh"},ye={fontWeight:"bold",fontSize:"1.8vw",lineHeight:"1rem",color:"white"},R={color:"white",fontSize:"1.1vw",letterSpacing:"0.1rem",wordSpacing:"0.04rem",lineHeight:"1.6rem",marginTop:"1.5%"},ve=()=>{const n=u.parse(be);return console.log(n),o("div",{children:[o(c,{style:{backgroundImage:`url(${n.main.backgroundPic})`,backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundPosition:"center",width:"100vw",height:"90vh",backgroundRepeat:"no-repeat",backgroundColor:"lightgray"},display:"flex",flexDirection:"column",children:[e(y,{}),e("div",{style:{width:"100%",flex:3,backgroundColor:"clear",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"0%"}}),e("div",{style:{width:"100%",flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e("div",{style:fe,children:"Musical Theater"})})]}),e(c,{style:{backgroundSize:"auto 100%",backgroundPosition:"center",width:"100vw",height:"140vh",backgroundRepeat:"no-repeat"},sx:{backgroundColor:"common.dark_lavender"},display:"flex",flexDirection:"column",children:o(b,{direction:"column",sx:{marginTop:"8%",marginLeft:"8.5%",marginRight:"35%",alignItems:"left"},children:[e("div",{style:{display:"flex"}}),n.entries.map(t=>o(f,{children:[o(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white"},children:[e(s,{sx:ye,children:t.title}),e("br",{}),e(s,{sx:R,children:t.desc})]}),e(F,{height:"10vh",url:t.link,controls:!0}),e("br",{})]})),e("br",{}),e("br",{}),e("br",{}),e("br",{}),n.extras.map(t=>e(f,{children:o(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white"},children:[e(s,{sx:R,children:t.desc}),e("br",{}),e(k,{href:t.linkText,sx:p(m({},R),{fontWeight:"bold",fontSize:"1.3vw",color:"black",textDecoration:"none",":hover":{color:"white"}}),children:t.linkText}),e("br",{})]})}))]})})]})};var ke=`
[main]
backgroundPic = "https://michellelugomusic.github.io/MichelleLugoMusicResources/MusicMenusPic.jpeg"
title = "Video Games"
subtitle = "Video game compositions"

[theAudioventure]
title = "The Audioventure"
body = '''
Check out my latest video game project, a playlist-themed game in which I composed a theme for the places \u201CBeach\u201D, \u201CParty\u201D, and \u201CThrough the clouds\u201D.
'''
linkUrl = '''
https://the-audioventure.github.io/The-Audioventure/#/Home
'''

[soundcloud]
title = "Best tracks"
body = '''
My top 5 tracks hosted on soundcloud
'''
playerUrl = '''
https://soundcloud.com/michelle-lugo-386819351/sets/best-tracks?color=#FFFFFF
'''
linkText = '''
https://soundcloud.com/michelle-lugo-386819351/sets/best-tracks
'''
linkUrl = '''
https://soundcloud.com/michelle-lugo-386819351/sets/best-tracks
'''

[[games]]
title = '''
Gourd Getaway
'''
body = '''
My track is on the last two levels of the game.
'''
linkText = '''
https://elijahcobb.itch.io/gourdgetaway
'''
linkUrl = '''
https://elijahcobb.itch.io/gourdgetaway
'''
picUrl = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/GourdGetaway.png
'''

[[games]]
title = '''
Pancakescape
'''
body = '''
There are three composers on this track, and our tracks play randomly.
'''
linkText = '''
https://caiojmini.itch.io/pancakescape
'''
linkUrl = '''
https://caiojmini.itch.io/pancakescape
'''
picUrl = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/Pancakescape.png
'''

[[games]]
title = '''
Doughmentum
'''
body = '''
I did the main menu music and all the sfx on this game.
'''
linkText = '''
https://ahrtxv.itch.io/dough-mentum
'''
linkUrl = '''
https://ahrtxv.itch.io/dough-mentum
'''
picUrl = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/Doughmentum.png
'''

[[games]]
title = '''
Bob the Bomber
'''
body = '''
Was responsible for all music and sfx on this game.
'''
linkText = '''
https://restartgame.itch.io/bob-the-bomber
'''
linkUrl = '''
https://restartgame.itch.io/bob-the-bomber
'''
picUrl = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/BobTheBomber.png
'''

[[games]]
title = '''
Boomerang attack
'''
body = '''
I did all the music and sfx on this game, as well as gave most of the ideas to create this game.
'''
linkText = '''
https://devpenguingames.itch.io/boomerang-attack
'''
linkUrl = '''
https://devpenguingames.itch.io/boomerang-attack
'''
picUrl = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/BoomerangAttack.png
'''

[[games]]
title = '''
Lost colors
'''
body = '''
I did all music/sfx.
'''
linkText = '''
https://globalgamejam.org/2021/games/lost-colors-2-0
'''
linkUrl = '''
https://globalgamejam.org/2021/games/lost-colors-2-0
'''
picUrl = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/LostColors.png
'''

[[games]]
title = '''
I have seen your dog
'''
body = '''
I did music
'''
linkText = '''
https://v3.globalgamejam.org/2021/games/i-have-seen-your-dog-7
'''
linkUrl = '''
https://v3.globalgamejam.org/2021/games/i-have-seen-your-dog-7
'''
picUrl = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/IHaveSeenYourDog.png
'''
`;const we={fontFamily:"Merienda",color:"white",fontSize:"6vw",lineHeight:"10vh"},$={fontWeight:"bold",fontSize:"1.8vw",lineHeight:"1rem",color:"white"},C={color:"white",fontSize:"1.1vw",letterSpacing:"0.1rem",wordSpacing:"0.04rem",lineHeight:"1.6rem",marginTop:"1.5%"},xe=()=>{const n=u.parse(ke);return o("div",{children:[o(c,{style:{backgroundImage:`url(${n.main.backgroundPic})`,backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundPosition:"center",width:"100vw",height:"90vh",backgroundRepeat:"no-repeat",backgroundColor:"lightgray"},display:"flex",flexDirection:"column",children:[e(y,{}),e("div",{style:{width:"100%",flex:3,backgroundColor:"clear",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"0%"}}),e("div",{style:{width:"100%",flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e("div",{style:we,children:n.main.title})})]}),e(c,{style:{backgroundSize:"auto 100%",backgroundPosition:"center",width:"100vw",height:"140vh",backgroundRepeat:"no-repeat"},sx:{backgroundColor:"common.dark_lavender"},display:"flex",flexDirection:"column",children:o(b,{direction:"column",sx:{marginTop:"8%",marginLeft:"8.5%",marginRight:"35%",alignItems:"left"},children:[e("div",{style:{display:"flex"}}),e(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white",marginBottom:"10%"},children:e(s,{sx:{fontWeight:"bold",fontSize:"3.5vw",lineHeight:"1rem",color:"white"},children:n.main.subtitle})}),o(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white"},children:[e(s,{sx:$,children:n.theAudioventure.title}),e(s,{sx:C,children:n.theAudioventure.body})]}),e("iframe",{title:"The Audioventure",src:n.theAudioventure.linkUrl,style:{width:"70vw",height:"50vh",borderStyle:"inset",borderWidth:"0.2vw",marginTop:"1.5%",marginBottom:"2%"}}),o("div",{style:{display:"flex",width:"70vw",height:"50vh",marginTop:"2%"},children:[e("div",{style:{display:"flex",width:"50%",height:"100%"},children:e(F,{url:n.soundcloud.playerUrl,config:{soundcloud:{options:{single_active:!1}}}})}),e("div",{style:{width:"50%",flex:1,margin:"auto"},children:e(D,{title:n.soundcloud.title,desc:n.soundcloud.body,linkUrl:n.soundcloud.linkUrl,linkText:n.soundcloud.linkText})})]}),n?n.games.map(t=>e(f,{children:e(A,{imgSrc:t.picUrl,title:t.title,desc:t.body,linkUrl:t.linkUrl,linkText:t.linkText})})):null,e("br",{})]})})]})},A=n=>{const{imgSrc:t,title:i,desc:r,linkUrl:l,linkText:a}=n;return o("div",{style:{display:"flex",width:"70vw",height:"50vh",marginTop:"5%"},children:[e("div",{style:{width:"70%",flex:1,objectFit:"contain",borderStyle:"inset",borderWidth:"0.2vw",boxSizing:"content-box",lineHeight:0,display:"block"},children:e("img",{style:{width:"100%",height:"100%",objectFit:"cover"},src:t})}),e("div",{style:{width:"50%",flex:1,margin:"auto"},children:e(D,{title:i,desc:r,linkUrl:l,linkText:a})})]})},D=n=>{const{title:t,desc:i,linkUrl:r,linkText:l}=n;return o(h,{component:"div",sx:{fontFamily:"Yaldevi",color:"white",flexWrap:"wrap",display:"flex"},children:[e(s,{sx:p(m({},$),{marginLeft:"10%"}),children:t}),e(s,{sx:p(m({},C),{marginLeft:"10%",marginTop:"4vh",width:"100%"}),children:i}),e(k,{href:r,sx:p(m({},C),{color:"black",marginLeft:"10%",":hover":{color:"white"},textDecoration:"none",marginTop:"4vh",width:"100%"}),children:l})," "]})};A.propTypes={imgSrc:g.string.isRequired,title:g.string.isRequired,desc:g.string.isRequired,linkUrl:g.string.isRequired,linkText:g.string.isRequired};var Me=`[main]
title = '''
Film Music
'''
backgroundPic = '''
https://michellelugomusic.github.io/MichelleLugoMusicResources/MusicMenusPic.jpeg
'''`;const Te={fontFamily:"Merienda",color:"white",fontSize:"6vw",lineHeight:"10vh"},Ie=()=>{const n=u.parse(Me);return console.log(n),e("div",{children:o(c,{style:{backgroundImage:`url(${n.main.backgroundPic})`,backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundPosition:"center",width:"100vw",height:"90vh",backgroundRepeat:"no-repeat",backgroundColor:"lightgray"},display:"flex",flexDirection:"column",children:[e(y,{}),e("div",{style:{width:"100%",flex:3,backgroundColor:"clear",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"0%"}}),e("div",{style:{width:"100%",flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e("div",{style:Te,children:n.main.title})})]})})};function Se(){x.useEffect(()=>{document.title="Michelle Lugo Music",document.body.style.backgroundColor="#5E6687"});const n=u.parse(U);return e(ee,{children:o(ne,{children:[e(w,{path:`/${n.navigate.home.subpage.trim()}`,element:e(z,{})}),e(w,{path:`/${n.navigate.biography.subpage.trim()}`,element:e(ge,{})}),n.navigate.portfolio.entries.map(t=>{const i=t.subpage.trim();switch(i){case"arrangements":var r=e(pe,{});break;case"musical_theater":var r=e(ve,{});break;case"video_games":var r=e(xe,{});break;case"film_music":var r=e(Ie,{});break;default:throw`Couldn't construct page for passed in page directory: ${t.subpage}`}return e(f,{children:e(w,{path:`/${i}`,element:r})})}),e(w,{path:"/",element:e(z,{})})]})})}const Re={lavender:"#5e6687aa",dark_lavender:"#5E6687",grayLighter:"rgba(255, 255, 255, 0.10)"},Ce=te({palette:{common:Re}});ie.render(e(x.StrictMode,{children:o(oe,{theme:Ce,children:[e(le,{}),e(Se,{})]})}),document.getElementById("root"));
