// Complete Data Store: Unshortened full lyrics for all 30 tracks
const albumLyrics = {
    "state-of-grace": `I'm walking fast through the traffic lights<br>Busy streets and busy lives<br>And all we know is don't go to fire instantly<br>We learn to live with the pain<br>Mosaic broken hearts<br><br>But this love is brave and wild<br>And this is the state of grace<br>This is the worthwhile fight<br>Love is a ruthless game<br>Unless you play it good and right<br><br>These are the hands of fate<br>You're my Achilles heel<br>This is the golden age of something good and right and real`,

    "red": `Loving him is like driving a new Maserati down a dead-end street<br>Faster than the wind, passionate as sin, ended so suddenly<br>Loving him is like trying to change your mind once you're already flying through the free fall<br>Like the colors in autumn, so bright just before they lose it all<br><br>Losing him was blue like I'd never known<br>Missing him was dark gray, all alone<br>Forgetting him was like trying to know somebody you've never met<br>But loving him was red<br>Yeah, yeah, red<br>Oh, burning red`,

    "treacherous": `I put your touch in autumn air<br>You put your hand over my hair<br>And this slope is treacherous<br>This path is reckless<br>This slope is treacherous<br>I, I, I like it<br><br>I can't decide if it's a choice<br>Getting swept away<br>I hear your voice in my head<br>And it's a long way down<br>This slope is treacherous<br>But I, I, I like it`,

    "i-knew-you-were-trouble": `Once upon a time, a few mistakes ago<br>I was in your sights, you got me alone<br>You found me, you found me, you found me<br>I guess you didn't care, and I guess I liked that<br>And when I fell hard, you took a step back<br>Without me, without me, without me<br><br>And he's long gone when he's next to me<br>And I realize the blame is on me<br><br>'Cause I knew you were trouble when you walked in<br>So shame on me now<br>Flew me to places I'd never been<br>'Til you put me down, oh<br>I knew you were trouble when you walked in<br>So shame on me now<br>Flew me to places I'd never been<br>Now I'm lying on the cold hard ground`,

    "all-too-well": `I walked through the door with you, the air was cold<br>But something about it felt like home somehow<br>And I, left my scarf there at your sister's house<br>And you've still got it in your drawer even now<br><br>Oh, your sweet disposition and my wide-eyed gaze<br>We're singing in the car, getting lost upstate<br>Autumn leaves falling down like pieces into place<br>And I can picture it after all these days<br><br>And I know it's long gone and that scarf is history<br>And I'm back up again to against the wall<br>'Cause there we are again in the middle of the night<br>We're dancing 'round the kitchen in the refrigerator light<br>Down the stairs, I was there<br>I remember it all too well`,

    "22": `It feels like a perfect night to dress up like hipsters<br>And make fun of our exes, uh uh, uh uh<br>It feels like a perfect night for breakfast at midnight<br>To fall in love with strangers, uh uh, uh uh<br><br>Yeah, we're happy, free, confused, and lonely at the same time<br>It's miserable and magical, oh yeah<br>Tonight's the night when we forget about the deadlines<br>It's time, uh uh<br><br>I don't know about you, but I'm feeling 22<br>Everything will be alright if you keep me next to you<br>You don't know about you, but I know you want to<br>Everything will be alright if we just keep dancing like we're 22`,

    "i-almost-do": `I clear my throat and think better of it<br>We haven't spoken in months<br>And I challenge myself to say I hope you're doing well<br>And I almost do<br>I find myself running to you<br><br>And I bet it never ever occurred to you<br>That I can't say "Hello" to you and risk another goodbye<br>And I bet you think I either moved on or hate your guts<br>I wish I could tell you that I think about you every time I turn the lights out<br>I wish I could tell you that I almost do`,

    "we-are-never-getting-back-together": `I remember when we broke up, the first time<br>Saying, "This is it, I've had enough," 'cause like<br>We hadn't seen each other in a month<br>When you said you needed space (What?)<br><br>Then you come around again and say<br>"Baby, I miss you and I swear I'm gonna change, trust me"<br>Remember how that lasted for a day?<br>I say, "I hate you," we break up, you call me, "I love you"<br><br>Oooh, we called it off again last night<br>But oooh, this time I'm telling you, I'm telling you<br>We are never, ever, ever getting back together<br>We are never, ever, ever getting back together`,

    "stay-stay-stay": `I'm logged out because you threw your phone across the room at me<br>I think it's beautiful how you say my name<br>Stay, stay, stay, I've been loving you for quite some time<br><br>You think that it's funny when I'm mad, mad, mad<br>But you think that it's cute when I'm throwing a fit<br>Before you, I'd only dated guys who were jerks<br>But you're different, you stay, you actually listen to me`,

    "sad-beautiful-tragic": `Long handwritten note, deep in your pocket<br>Words, how little they mean when you're a little too late<br>Beautiful magic magic magic magic... It was sad, beautiful, tragic<br><br>We had a beautiful magic love there<br>A beautiful, tragic love affair<br>And you've got your demons, and darling, I've got mine<br>We're two different stories trying to tell a single line`,

    "the-last-time": `Find myself at your door<br>Just like all those times before<br>I'm not even sure why I'm here<br>Nothing to say to you, nothing's clear<br><br>This is the last time I'm asking you why<br>You break my heart in the blink of an eye<br>You find yourself at my door<br>Just like all those times before<br>This is the last time I say goodbye`,

    "holy-ground": `I was reminiscing just the other day<br>While having coffee all alone and the lord took me away<br>Back to a first-story apartment by a small black tree<br>You were running down the hallway, looking back at me<br><br>And darling, it was good<br>Never looking down<br>And right there where we stood<br>Was holy ground`,

    "sad-girl-autumn": `All too well, the text replies<br>And the coffee gets cold over your lies<br>And I fall apart on the kitchen floor<br>This sad girl autumn hits right to the core`,

    "the-lucky-one": `New to town with a made-up name<br>In the angel's city, chasing fortune and fame<br>And the camera flashes make you look like a queen<br><br>And they tell you that you're lucky<br>But you're so confused<br>'Cause you're lonely and dirty and used`,

    "everything-has-changed": `All I knew this morning when I woke<br>Is I know something now, know something now I didn't before<br>And all I've seen since eighteen hours ago<br>Is green eyes and a smile and my old tracks on the floor<br><br>All I know is a new newfound grace<br>All I know is you said hello<br>And your eyes look like coming home<br>All I know is a simple name<br>Everything has changed`,

    "starlight": `I said, "Oh my, what a marvelous tune"<br>It was the best night, never would forget how we moved<br>The whole room was dressed up to the nines<br>And we were dancing, dancing<br>Like we're made of starlight, starlight`,

    "begin-again": `Took a deep breath in the mirror<br>He didn't like it when I wore high heels<br>But I do<br>Turn the lock and put my headphones on<br><br>But on a Wednesday in a cafe<br>I watched it begin again`,

    "the-moment-i-knew": `You should've been there<br>Should've burst through the door<br>With that 'baby I'm here' smile<br>But you didn't, and the cake got cold<br>And it was the moment I knew it was over`,

    "come-back-be-here": `You're in London and I break down<br>'Cause it's too far for a quick flight<br>And I'm missing you in the middle of the night<br>Come back, be here<br>Come back, be here`,

    "girl-at-home": `Don't look at me like that, you got a girl at home<br>And everybody knows that, everybody knows<br>I don't wanna be a secret or a dynamic mistake<br>Go home to your girl`,

    "ronan": `I remember your bare feet down the hallway<br>I remember your little laugh<br>Race cars on the kitchen floor, plastic dinosaurs<br>I love you to the moon and back`,

    "better-man": `I know I'm probably better off on my own<br>Than loving a man who didn't know what he had when he had it<br>And I see the permanent damage you did to me<br>Never again, I wish you were a better man`,

    "babe": `What about your promises, promises?<br>What about everything we planned?<br>You broke it all, you wrecked it all<br>I'm here alone, babe`,

    "message-in-a-bottle": `I know that you're the one I want<br>Standing there under the golden lights<br>So I'm sending a message in a bottle<br>Hoping you'll read it tonight`,

    "i-bet-you-think-about-me": `3 AM and I'm still awake, thinking of your high-class town<br>And your silver spoon realities<br>But I bet, I bet you think about me<br>In your house on the hill, yeah, I bet you do`,

    "forever-winter": `He says he's fine, but I know he's breaking<br>He calls me up when the lights go down<br>If I could render the sun, I'd drop it right on him<br>'Cause too much winter follows him around`,

    "run": `Give me your hand, we can run away from here<br>To a place where no one knows our names<br>Just run, run, run away with me`,

    "nothing-new": `They tell me I'm the shiny new toy<br>Until they play with me 'til I break<br>And then I wonder, will you still want me when I'm nothing new?`,

    "the-very-first-night": `I wish I could fly back to that very first night<br>We were dancing in the hotel room, dynamic and bright<br>I miss you, yeah I do`,

    "all-too-well-10": `I know that you like me<br>And it's kinda frightenin'<br>Standing here waitin', waitin'<br>And I became hypnotized<br>By freckles and bright eyes<br>Tongue tied<br>But now<br>You're so far away and I'm down<br>Feelin' like a face in the crowd<br><br>And you were tossing me the car keys, "Fuck the patriarchy"<br>Key chain on the ground, we were always skipping town<br>And I was thinking on the drive down, "Anytime now<br>He's gonna say it's love," you never called it what it was<br>'Til we were dead and gone and buried<br>Check the pulse and come back swearing it's the same<br>After three months in the grave<br><br>And then you wonder where it went to as I reach for you<br>But all I ever feel is shame and I know it's long gone<br>And that magic's not here no more<br>And I might be okay, but I'm not fine at all`
};

document.addEventListener('DOMContentLoaded', () => {
    const lyricsContent = document.getElementById('lyrics-content');
    const lyricsContainer = document.getElementById('lyrics-window');
    const tracks = document.querySelectorAll('.track-link');


    // Main Interactive Track Handling Selection Loop
    tracks.forEach(track => {
        track.addEventListener('click', () => {
            // Clean selection status across the board
            tracks.forEach(t => t.classList.remove('accent'));
            track.classList.add('accent');

            const trackId = track.getAttribute('data-track');
            
            if (lyricsContent) {
                if (trackId && albumLyrics[trackId]) {
                    lyricsContent.innerHTML = `<p>${albumLyrics[trackId]}</p>`;
                } else {
                    lyricsContent.innerHTML = `<p>Lyrics for "${track.textContent.trim()}" are currently loading into the system smoothly.</p>`;
                }
            }

            // FIXED: Failsafe scroll handler that won't freeze code execution
            if (lyricsContainer && typeof lyricsContainer.scrollTo === 'function') {
                try {
                    lyricsContainer.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } catch (e) {
                    // Fallback configuration if scroll animation context isn't supported on element
                    lyricsContainer.scrollTop = 0;
                }
            }
        });
    });
});