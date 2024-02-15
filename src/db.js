import Image1 from "./assets/images/usersDB/1.png"
import Image2 from "./assets/images/usersDB/2.png"
import Image3 from "./assets/images/usersDB/3.png"
import Image4 from "./assets/images/usersDB/4.png"
import Image5 from "./assets/images/usersDB/5.png"
import Image6 from "./assets/images/usersDB/6.png"
import Image7 from "./assets/images/usersDB/7.png"
import Image8 from "./assets/images/usersDB/8.png"
import Image9 from "./assets/images/usersDB/9.png"
import Image10 from "./assets/images/usersDB/10.png"
import Image11 from "./assets/images/usersDB/11.png"
import Image12 from "./assets/images/usersDB/12.png"
import Image13 from "./assets/images/usersDB/13.png"
import Image14 from "./assets/images/usersDB/14.png"
import Image15 from "./assets/images/usersDB/15.png"
import Image16 from "./assets/images/usersDB/16.png"

export const users = [
    {id: 1, verify: true, name: "Natura", microphone: true, speak: false, hand: false, emoji:false, img: Image1, position: "Project Manager", isCamera : true, host: "Host"},
    {id: 2, verify: true, name: "Cecile", microphone: false, speak: true, hand: false, emoji:false, img: Image2, position: "Software Developer", isCamera : true, host: "Co-Host"},
    {id: 3, verify: false, name: "Nico", microphone: false, speak: false, hand: false, emoji:false, img: Image3, position: "UI/UX Designer", isCamera : true, host: ""},
    {id: 4, verify: false, name: "Bryan", microphone: true, speak: false, hand: false, emoji:false, img: Image4, position: "Ethical Hacker", isCamera : true, host: ""},
    {id: 5, verify: false, name: "Azzura", microphone: true, speak: false, hand: false, emoji:false, img: Image5, position: "Team Leader", isCamera : true, host: ""},
    {id: 6, verify: false, name: "Ahmed", microphone: true, speak: false, hand: false, emoji:false, img: Image6, position: "UI/UX Designer", isCamera : true, host: ""},
    {id: 7, verify: false, name: "Marry", microphone: false, speak: false, hand: false, emoji:false, img: Image7, position: "Senior Backend Developer", isCamera : true, host: ""},
    {id: 8, verify: false, name: "Diana", microphone: false, speak: false, hand: false, emoji:false, img: Image8, position: "Junior Frontend Developer", isCamera : true, host: ""},
    {id: 9, verify: false, name: "Lucas", microphone: false, speak: false, hand: false, emoji:false, img: Image9, position: "Junior Database Developer", isCamera : true, host: ""},
    {id: 10, verify: false, name: "Mike", microphone: true, speak: false, hand: false, emoji:false, img: Image10, position: "Junior Backend Developer", isCamera : true, host: ""},
    {id: 11, verify: false, name: "Daniel", microphone: true, speak: false, hand: false, emoji:false, img: Image11, position: "Middle Backend Developer", isCamera : true, host: ""},
    {id: 12, verify: false, name: "Shandy", microphone: true, speak: false, hand: false, emoji:false, img: Image12, position: "UI/UX Designer", isCamera : true, host: ""},
    {id: 13, verify: false, name: "Stephany", microphone: true, speak: false, hand: false, emoji:false, img: Image13, position: "Middle Frontend Developer", isCamera : true, host: ""},
    {id: 14, verify: false, name: "Robert", microphone: true, speak: false, hand: false, emoji:false, img: Image14, position: "Senior Database Developer", isCamera : true, host: ""},
    {id: 15, verify: false, name: "Lily", microphone: true, speak: false, hand: false, emoji:false, img: Image15, position: "Senior Frontend Developer", isCamera : true, host: ""},
    {id: 16, verify: false, name: "Michael", microphone: true, speak: false, hand: false, emoji:false, img: Image16, position: "Middle Database Developer", isCamera : true, host: ""},    
]
export const messages = [
    {id: 7, fromName: "Marry", toId: 0, toName: "Evevryone", time: "05:32 PM", messageType: "write", message: "Hi there, how are you?", fileSize: "",  img: Image7,},
    {id: 3, fromName: "you", toId: 0, toName: "Evevryone", time: "05:32 PM", messageType: "write", message: "I am great, Thanks!\nHow are you?", fileSize: "",  img: Image3,},
    {id: 7, fromName: "Marry", toId: 0, toName: "Evevryone", time: "05:32 PM", messageType: "write", message: "Fine thanks. Can you send me my newest workout schedule?", fileSize: "", img: Image7,},
    {id: 3, fromName: "you", toId: 0, toName: "Evevryone", time: "05:32 PM", messageType: "file", message: "workout schedule.xlsx", fileSize: "43 Kb", img: Image3,},
    {id: 7, fromName: "Marry", toId: 0, toName: "Evevryone", time: "05:32 PM", messageType: "write", message: "Hi there, how are you?", fileSize: "",  img: Image7,},
    {id: 3, fromName: "you", toId: 0, toName: "Evevryone", time: "05:32 PM", messageType: "write", message: "I am great, Thanks!\nHow are you?", fileSize: "",  img: Image3,},
    {id: 7, fromName: "Marry", toId: 0, toName: "Evevryone", time: "05:32 PM", messageType: "write", message: "Fine thanks. Can you send me my newest workout schedule?", fileSize: "", img: Image7,},
    {id: 3, fromName: "you", toId: 0, toName: "Evevryone", time: "05:32 PM", messageType: "file", message: "workout schedule.xlsx", fileSize: "43 Kb", img: Image3,},
]
