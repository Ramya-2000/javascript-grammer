const channel={
    title: "Javascript",
    languages: ["tamil","english"],
    subscribe(){
        console.log(this);
    },
    Showvideos(){
        console.log(this.languages);
    },
};
channel.Showvideos();