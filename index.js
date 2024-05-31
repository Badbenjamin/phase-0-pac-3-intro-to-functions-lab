function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
    // return (string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase());
    // return (string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}

// console.log("shout", shout("Hello!"));
// console.log("whisper", whisper("Hello!"));
// console.log("logShout", logShout("Hello!"));
// console.log("logWhisper", logWhisper("Hello!"))
// console.log("headphone", sayHiToHeadphonedRoommate("hello"));
// console.log("headphone", sayHiToHeadphonedRoommate("HELLO"));
// console.log("headphone", sayHiToHeadphonedRoommate("Let's have dinner together!"));
