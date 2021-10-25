import {v4 as uuidv4} from "uuid";

function chillhop(){
    return[
       {
           name: "Be Here Now",
           cover: "https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",
           artist: "Chillhop Music, chief",
           audio: "https://mp3.chillhop.com/serve.php/?mp3=21782",
           color: ["#3C1C0B", "#7D2B13"],
           id: uuidv4(),
           active: true
       },
       {
        name: "LuvnYou",
        cover: "https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",
        artist: "Chillhop Music, Ian Ewing",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=21784",
        color: ["#3C1C0B", "#7D2B13"],
        id: uuidv4(),
        active: false  
       },

       {
        name: "Dawn",
        cover: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-150x150.jpg",
        artist: "Toonorth",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=17931",
        color: ["#3B506D", "#7D2B13"],
        id: uuidv4(),
        active: true
    },
    {
        name: "Lavish",
        cover: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-150x150.jpg",
        artist: "Toonorth",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=17933",
        color: ["#3B506D", "#7D2B13"],
        id: uuidv4(),
        active: true
    },
    {
        name: "Opia",
        cover: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-150x150.jpg",
        artist: "Toonorth",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=17946",
        color: ["#3C1C0B", "#7D2B13"],
        id: uuidv4(),
        active: true
    },
    {
        name: "Rover",
        cover: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-150x150.jpg",
        artist: "Toonorth",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=17927",
        color: ["3B506D", "#A3AFFA"],
        id: uuidv4(),
        active: true
    },

    {
        name: "Down",
        cover: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-150x150.jpg",
        artist: "Toonorth",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=17929",
        color: ["#3B506D", "##A3AFFA"],
        id: uuidv4(),
        active: true
    },
    ];
}

export default chillhop;