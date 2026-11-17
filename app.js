// Complete data-driven portfolio + GitHub-authenticated Admin CMS for iskandar afiq (alonecult.github.io)

const GITHUB_OWNER = "alonecult";
const GITHUB_REPO = "alonecult.github.io";
const GITHUB_BRANCH = "main";

// Embedded default site content (automatically overridden by content.json or local admin draft)
const DEFAULT_CONTENT = {
  home: {
    headline: "iskandar afiq is him",
    subheadline: "this is his website. nothing much. just his works. but, welcome though.",
    heroPhotoMain: "https://static.wixstatic.com/media/f30f79_70ee856312d04baeb8fc9c2f5825f4bf~mv2.png",
    heroPhotoSecondary: "https://static.wixstatic.com/media/f30f79_137958e93ad8440186a53179e1226b9c~mv2.png",
    pixelSmiley: "https://static.wixstatic.com/media/f30f79_332d8993089e40c9b29f70cf3b544539~mv2.png",
    aboutPhoto: "https://static.wixstatic.com/media/f30f79_70ca4adced1b4493a30805d64e425499~mv2.jpg",
    aboutParagraphs: [
      "while everyone else was named afiq iskandar, he was named iskandar afiq. iskandar afiq is a degree in creative writing student, currently trying to expand his skills and seek new challenging yet fun experiences. when he is not writing, you can find him sitting on his somewhat ergonomic chair, playing GTA. he drowns in it too.",
      "sometimes, he writes lyrics when he's bored. just wanted you to know that. also, he writes poems now, though not often. another thing, he misses writing film scripts when he's in his degree. scriptwriting means a lot to him, ever since diploma.",
      "another thing you should know, yes, he ADORES tech. he put way too much time on Mrwhosetheboss, Marques Brownlee, Linus Tech Tips, and other tech-related channels on YouTube (but now, perhaps less, though. he hates YouTube now)."
    ],
    quote: "fear is just a fragment of one’s imagination. use it and shape it into a story that could fear others.",
    quoteAuthor: "iskandar afiq",
    email: "iskandarafiqhafizuddin@gmail.com",
    instagramHandle: "@alonecult",
    instagramUrl: "https://instagram.com/alonecult",
    tiktok: "(not really)",
    twitter: "(never)",
    copyright: "©2023-2026 by iskandar afiq.",
    lastEdit: "16-11-2026"
  },
  scripts: {
    intro: "here are a list of scripts (only a part of them) that i've written so far, in chronological order.\nfeel free to read them, thanks.",
    diploma: [
      { title: "MANIPULASI (short film).pdf", url: "https://e4cd544f-634d-4057-9321-5c24cb3dc210.filesusr.com/ugd/f30f79_dfd19987235c48289569a5b89fcefe0d.pdf" },
      { title: "KANCAH SIBER (radio drama).pdf", url: "https://e4cd544f-634d-4057-9321-5c24cb3dc210.filesusr.com/ugd/f30f79_aa04af0ff009450a89c317af1f950a03.pdf" },
      { title: "BERAT (tv drama).pdf", url: "https://e4cd544f-634d-4057-9321-5c24cb3dc210.filesusr.com/ugd/f30f79_4c15da0d24be4d0c9fb5187bf42331bb.pdf" },
      { title: "Whisker Wonders! - EP3 (tv writing for children).pdf", url: "https://e4cd544f-634d-4057-9321-5c24cb3dc210.filesusr.com/ugd/f30f79_349a1f615078446c84f1e8b28c7bc4ef.pdf" }
    ],
    degree: [
      { title: "Oh Maggi-Ku! (short musical film).pdf", url: "https://e4cd544f-634d-4057-9321-5c24cb3dc210.filesusr.com/ugd/f30f79_bf66d3ebf5f24d7e80e66b00c3edb3c4.pdf" },
      { title: "Untitled short film script.pdf", url: "https://e4cd544f-634d-4057-9321-5c24cb3dc210.filesusr.com/ugd/f30f79_628f6f6447d7491d955671d9e6048ca8.pdf" },
      { title: "HD799 (short story).pdf", url: "https://e4cd544f-634d-4057-9321-5c24cb3dc210.filesusr.com/ugd/f30f79_9e890302f6934f02979f5c94f9f3ff60.pdf" },
      { title: "Hikayat Ratu Kalinyamat (play script).pdf", url: "https://e4cd544f-634d-4057-9321-5c24cb3dc210.filesusr.com/ugd/f30f79_a7747086d70d49ee9d933fd665a5134b.pdf" },
      { title: "Badang (short story).pdf", url: "https://e4cd544f-634d-4057-9321-5c24cb3dc210.filesusr.com/ugd/f30f79_abc4c523bb8241e9b21a3f63132d4eea.pdf" }
    ]
  },
  anna: {
    title: "anna",
    subtitle: "short story · by iskandar afiq",
    paragraphs: [
      "Anna kept running. She was gasping for air as she ran. Her lungs gave her a sign to stop and rest, but her mind said no. She had no choice. There was no turning back. She was in confusion as to what was chasing her. Her two friends got caught by the creature. They told her to run away as fast as she could and don’t look back. She wanted to help them, but it was too late as the unknown creature had already taken their lives before she could ever do anything. She knew that they were dead from the sound of their flesh that got blown up as she started running away from it. She tried her best not to look back and fight her curiosity as to what was behind her. Whatever chased her that time was malicious and delirious. No man could ever imagine the horrific features of the creature. The simplest way to describe it was it consisted of every human’s fears into one delightfully jaw-dropping and dreadful package. If anyone looked into its eyes, their eyes would pop out and their bodies would blow up to oblivion, leaving only gallons of blood, boneless as their bones melted, and dissolved with their blood.",
      "The air was thick, polluted by the smoke from abandoned factories, fire from blown cars, and the smell of liquidized bodies on the road. It’s killing Anna as she breathed the polluted air, making her suffocate, interfering with her focus, and making her visions blurry. She felt helpless as there was nobody beside her. Nobody was around to save her from the pandemonium. She then covered her nose with her hands to lessen the pain in her nostrils and not give a chance for the air to seep through her brain. She kept running until there was no sound, only silence surrounded her. Thankfully, she lost it as the creature was distracted by an explosion that occurred near her current location. After a while, she felt safe and stopped running. She wanted to catch her breath, but because of the polluted air, she had to keep holding her nose. As she walked on the abandoned road, she then spotted a tunnel. It was dark and narrow, but it looked like a safe place to camp in for the day before the night caved in. She checked the tunnel for any hidden threats or if there was weird stuff lying in there. Luckily, there was none. Confident she was to stay there for the night as Delta Town was far away from there, and she needed enough rest to rejuvenate her stamina for the next day. She didn’t get any rest for a while. She needed the rest. She deserved it.",
      "Mosquitoes flew on Anna’s face as she was still sleeping on her bloody blanket, making a lot of annoying buzzing sounds, but it didn’t bother Anna’s sleep. Until one of the mosquitoes decided to suck on Anna’s blood from her soft but smudged right cheek, and left an itch on it. Because of the itchiness, she was awoken from her sleep as she couldn’t bear the itchiness. She used her messed-up hands to scratch it to get rid of the itchiness to oblivion. She then recollected herself and observed her surroundings. She realized, it was already morning. It was also raining heavily with the sound from the rain and the storm overpowered the sound of the environment. Afraid she might get caught by the creature, she decided to keep on moving to her desired destination. She took the inland routes and avoided going through the main road as the creature wandered there a lot. Inland routes meant that she walked into the woods as she thought it was safe enough to go through there. It was quite peaceful in there for a while as there was nothing chasing after her. She walked at a slow pace to save her energy for the long journey that was up ahead.",
      "While Anna was walking, she dug into her sling bag and took out her phone. She turned it on to see if there was any signal in there. Obviously, there wasn’t any reception in the woods. She put her phone back in her bag, but right as she was about to put it, there was a notification ding. She was shocked by the sound and immediately turned her phone back on. Somehow, there was a reception there. She was completely confused as to how that was possible. She then noticed that there was a message from her mother. It wasn’t the typical “How’s school today” type of message. Instead, it was a warning for her to leave the place as soon as possible and survive. Anna was more confused as to why her mother said that to her. Before she could even reply to her mother’s message, the line was cut and there was no reception again. Frustrated she was with the situation. She was left with more questions as to why everything happened and how it all happened. She was at loss. She then continued walking for hours and hours, and after a while, she realized that she was lost. The only thing that she saw around her were trees, identical to each other, giving her a hard time to backtrack her footsteps as her footsteps would disappear behind her.",
      "Anna was in disbelief as to how it was possible for her footsteps to vanish behind her. She tried to make new footprints while walking backwards. She turned to her front for a split second and looked back. She was truly shocked to see that her footprints were vanishing in real-time. Tears then started dripping from her eyes as she was truly confused about everything and felt sad that this kind of fate befell her. An unfortunate fate. Everything happened too soon. Her mind was scrambled like an omelet. She felt hopeless and wanted to give up as there wasn’t anything else but trees that surrounded her, which made her more anxious than ever. She couldn’t think straight at all. She thought that she was hallucinating and that everything around her was a facade. Plus, the weather somehow got colder and made it even harder for Anna to keep on moving as she couldn’t stand the sudden coldness of the woods. The only thing that she could do was just sit in one place and hope that everything would just go back to normal the next day. She then sat under one of the trees, covered her whole trembling body with her bloody pillow to make herself feel warm enough, and forced herself to fall asleep to make the time pass by quickly.",
      "## Two days ago –",
      "The sky was deep blue and the weather was sunny. Nothing new had happened that day. Everything was normal as usual. Anna woke up early in the morning and prepared for school as it was Friday, the last weekday before the weekends would roll in. She was ecstatic to go through her day. She jumped from the second floor of her house to the first floor through the stairs. Luckily, she didn’t roll herself down the stairs and injure herself. She was alert enough to her surroundings and managed to punch in the right combo for the right moves to land safely on the first floor. Her father saw her gesture and warned her of her dangerous actions as he was worried that she might injure herself in the future. Anna then went to her mother, kissed her cheek, and said her goodbyes as her father would send Anna to her school afterwards.",
      "The distance between her home and her school was far, like really far out of town. It was an hour’s drive if there weren’t any traffic jams on the road. The school was Kohren International High School, one of the best in the country. She managed to get into the school with the help of her uncle as he was the principal there. Even though she got into it because she had a connection with someone there, she was still one of the best students there. She excelled in every single subject and in curricular activities. The teachers and students admired her a lot and made her a prime example for the school. But, everything would change that day as there would be a slight change in her usual routine and plans. Whatever she expected to happen that day were good things but instead, dreadful things would occur.",
      "At first, everything seemed alright. Anna arrived at school on time as usual. She would kiss her father’s cheeks and her father would say to Anna to do her best at school as always. Her best friends, Jamie and Natalie would always wait for her at the front gate. She then went to her friends and they entered the school together. They would attend the school assembly, then go to their class, and learn as usual. Exactly at 4.30 pm when the Science class was about to start, something happened. Suddenly, the ground started shaking like crazy and everyone panicked, including Anna. The Science teacher thought that it was an earthquake, so he instructed everyone to calm down and take cover under the tables. Everyone obliged. It was weird that an earthquake would happen there as the country rarely encountered or experienced earthquakes in years. The last time it happened was 55 years ago. Everyone thought that it was just a coincidence for the earthquake to happen that day.",
      "After three minutes of the ground shaking like crazy, it stopped. The whole school went silent for a moment. But just as the whole class was about to get up, the ground started shaking again, but this time, it was wilder than before. The Science class was on the third floor, so the impact wasn’t as wild as on the lowest floor. But it was still chaotic enough to make the whole floor shake. Everyone tried their best to stay still at their places, but to no avail, as the ground was shaking more violently every single minute. It was disastrous to the point where the floor started to crack and everyone was more concerned than ever. Then, the cracks started to get bigger and a small hole was formed. It started small but as the earthquake started to worsen, it grew bigger. The third floor which was once the safest floor became the most dangerous.",
      "As the floor started to puncture more, everybody quickly went to the walls in the class and one by one, everybody went outside through the door and successfully went out, except for Anna. She almost made it to the door, but the floor in front of her cracked and had cut her path. If she wanted to get to the door, she had to jump as far as possible, but it was impossible as the way behind her was also cut, leaving only a small platform for her to step on. She couldn’t do a long jump because there was not enough space for her to do it. Her two friends that were already outside noticed that Anna wasn’t with them. They wanted to go back and save Anna, but it was too late as the door to the classroom was blocked by blocks of concrete.",
      "Anna had nowhere to go as the floor was almost to none. She was traumatized by the situation and suddenly, she fainted and fell down. Before she hit the ground, something came to her. It was glowing brightly. She had a glimpse of what it was but what she only saw was light. A formless light. She saw it go into her skin and it seeped through her veins. She thought she was going to die a miserable death. Before she could ever feel anything, she blacked out. Her body was numb but her mind was still working. Anna was in a state of coma. Without her realizing, the light lifted her body before her head could collide with the ground and it flew her away from the destruction of the school building. It then safely landed her body on the school field. She had only a few scratches on her left arm, but her overall condition was still fine. She was saved by an unknown entity that silently lived in her mind.",
      "Anna then woke up on the school field. She felt nauseous and had a headache. She scanned her surroundings and once she realized that she was on the field, she jumped as she was shocked as to how she was able to get there. The last thing that she remembered was when she was about to die from falling from the third floor. She couldn’t comprehend what just happened to her. Her other classmates and her Science teacher had spotted her when they were on their way to exit the school. All of them were shocked too, including Jamie and Natalie. They were worried about her. They asked Anna how she got there, but Anna couldn’t answer their question as she too didn’t know what had happened to her, but it sure was a miracle, even though she didn’t anticipate it.",
      "The school was completely destroyed, but everyone managed to get out. There were a few injured, but luckily no casualties were detected. Everyone felt safe for a while. They thought that the chaos had ended, or so they thought. Just when they were about to leave, the ground was shaking again, but this time, the earth was opening its mouth. Some of the students and teachers fell into the gaping hole, left to die as nobody saw it coming. All of them remaining then quickly ran as fast as they possibly could and drained most of their stamina just to save themselves from the literal hellhole. While they were running, something came out of the gaping hellhole, but none of them saw what it was as they were already far ahead and didn’t look back at all. Even though they felt exhausted, they didn’t have the privilege to stop running. They had to force themselves to push through their limits in order to survive. Before the chaos, there were 400 people in the school, but because of the recent catastrophe, there were only 340 left.",
      "The sky was getting dark. Everyone was exhausted as they had run for an hour straight without stopping. They slowed their pace as their surroundings were calm again. One of the teachers that survived, Mr. Oliver had spotted an abandoned building that was abandoned for about 60 years and somehow, it was still standing tall after years of its existence. He then escorted all of the students with the help of the other teachers, including the principal, to the abandoned building to camp out for the night, but instead of camping outdoors, they camped indoors. It wasn’t the typical school camping experience. The place was more like a refuge for refugees. It was big enough for all of them to stay, even though it was smelly and grimy.",
      "As the others chose their spots to sleep at, Anna looked outside through the glassless window. Outside was grim and gloomy. She didn’t expect all of the chaos to unfold in front of her. Truly shocked she was after the near-death moment that she had experienced. She also felt sad that everything didn’t turn out the way she wanted to like the days before. Anna cried. She missed her home and her parents so much. She didn’t want all of this to happen. Jamie and Natalie saw her crying and comforted her, making her feel calm again. Anna then took her spot beside her two best friends and slept.",
      "## One day ago –",
      "The sun was up and everyone was still sleeping as they were really tired from running yesterday, except for Anna. She woke up early as she was used to it since she was little. It was now Saturday. The gloominess of yesterday continued to today as the sky wasn’t as blue as yesterday morning. She took her phone out of her bag and checked for any missed calls but there was no service to receive any calls or call someone. She then opened the gallery app to look at photos of her past and reminisce about the good times that she had with her family. Her heart couldn’t hold back her longing for her parents. She missed them too much.",
      "Suddenly, a sound appeared. A weird and peculiar sound. Anna was surprised the moment she heard the sound. It didn’t sound human at all. It sounded like a dragon’s growl, but less magnificent and more haunting. It was an unexpected visit from it. She didn’t have the guts to turn around as she had a sense, somewhat of a tingle like Spider-man. She could detect the thing from meters away. Her heart was beating faster than ever before as she was anxious and afraid of whatever was behind her. She tried to calm herself down and be silent for the rest of the time that it was there. Her two friends that were sleeping beside her didn’t notice the thing. In fact, nobody did. Only Anna sensed its presence.",
      "Then, one of the students woke up from his sleep and made a yawning noise. Because of that, the thing came running at the student at a blazing speed and grabbed him by the throat. The student then yelled for help but before anyone could ever help him, his whole body exploded and turned into liquid as soon as he looked into the creature’s eyes. The person that slept beside him was awakened by the sound of his mate’s exploded body. She then noticed the creature and then, the creature would quickly grab her throat and did the same thing to her. And with its cold stare into her eyes, she immediately exploded to oblivion, leaving nothing but a gallon of her liquidized body. Anna woke her two friends up and told them to take cover somewhere.",
      "More people had awakened from their sleep and heard the sound of the explosion of the girl’s body as it was loud. Everyone was terrified by the thing and panicked. They ran around the building as they tried to protect themselves from the creature. But the creature was fast enough to do its job. It killed people after people in a matter of minutes. After only five minutes, the creature had killed more than 250 people that were there. The ones that still survived after the mass killing had taken cover on the other side of the building as there was a hidden room that was covered by a piece of wood. It didn’t take long for the creature to discover their hiding place. They were also killed by the creature with no mercy and it left nothing but puddles of blood in there. Nobody was left alive.",
      "Anna and her two friends were hiding somewhere else, somewhere more dangerous than any other place, behind an old desk. Jamie and Natalie were petrified and couldn’t calm down. Anna tried her best to keep their friends calm as she sensed that the creature was getting closer to them. They could hear it growling uglily beside the table. Natalie wanted to scream but Anna and Jamie closed her mouth shut with their hands to contain her scream. Then, the creature lifted the table and threw it away from them. They were exposed to it. The creature then held Jamie and Natalie by their necks. Both of them tried their best to not look at it and tried to resist it. They tried kicking it but to no avail. Nothing worked. Anna even tried her best to distract it while not looking directly at it, but it didn’t work either as the creature was focused on her two friends. They then told Anna to run away as fast as possible while she got the chance as they couldn’t do anything else but sacrifice themselves for it. Anna hesitated at first but she knew that it wasn’t worth it if she had stayed. She had to leave them without any goodbyes. She could cry for them but her tears wouldn’t save them. It was hopeless.",
      "## Today –",
      "Anna was awakened from her sleep, but to her surprise, she woke up somewhere else. She wasn’t in the forest anymore. She was in a white room. Everything around her was white. That was all she could see, the color white. She felt the walls as she tried to find a door but there wasn’t any. For some reason, she became pissed. She was angry about everything that happened to her. It was unfair. Because of her uncontrollable anger, she produced a raw power that obliterated the walls to unveil a group of people that was observing her from afar. She was surprised by what she saw and passed out.",
      "At that time, she was held in a secret facility in the middle of nowhere. The place was unknown to anybody in the world, not even the government. It was like Area 51, but not for observing aliens and confiscating UFOs, but instead it was specialized in researching people that were chosen by the light. Everything that happened in Anna’s life was a simulation that involved a lot of people, including her friends. They were born and raised in a fake and fabricated reality. The creatures that attacked them were called Cylops, programmed to kill people who weren’t chosen by the light. Anna was the most successful candidate among other failed candidates. She was different from anybody else there. She was the chosen one."
    ]
  },
  sinisterRoots: {
    title: "sinister roots.",
    description: "this is a zine that i made for my end of semester assignment. the concept behind this anthology is to show that different events are happening in the same timeline. sinister roots also indicate the separate roots represented by the short stories came from the same tree, that is, the sinister itself.",
    warning: "i warn you, there is some disturbing imagery in the zine, so proceed with caution.",
    note: "p/s: this is just a sample. not the full thing.",
    coverImage: "https://static.wixstatic.com/media/f30f79_514b4577916f4831b00dbb6327a63f5f~mv2.jpg",
    pdfUrl: "https://e4cd544f-634d-4057-9321-5c24cb3dc210.filesusr.com/ugd/f30f79_04512ee19c554cd68a25870c15b44d70.pdf"
  },
  audioDevices: [
    {
      title: "⬅️ Baseus Bowie D03",
      badge: "overall: 6/10",
      image: "https://static.wixstatic.com/media/f30f79_31ce83972fbc41c7b942f8193ef04ac0~mv2.jpg",
      imageLeft: true,
      tldr: "Quality: it’s alright\nPerformance: decent enough for the price. not the highest fidelity. depends on what kind of app you use. bass is strong when at 30% volume.",
      paragraphs: [
        "the bass: stronger than i had anticipated when at 30% volume and above.",
        "the sound quality: about 6.5/10. it’s alright. in between Sonicgear’s Airphone 6 and Edifier’s Hecate wired gaming headphone (base model).",
        "the comfort level: 6.5-7/10. definitely more comfortable than the Airphone 6. the earpads could’ve been thicker and bigger, but it’s alright. it depends on how big your head is. my head is big and it fits alright, just had to adjust it to make it a bit longer.",
        "overall: 6/10. it’s alright. sorry if i seem biased from the score that i gave. it’s just what i’ve felt with this headphone."
      ]
    },
    {
      title: "Picun ANC-05L ➡️",
      badge: "overall: 7/10",
      image: "https://static.wixstatic.com/media/f30f79_e8f0117d95dd400daf57dc01c196a531~mv2.webp",
      imageLeft: false,
      tldr: "Performance: sound quality is decent, ANC is fine sometimes\nQuality: pretty high quality",
      paragraphs: [
        "Build quality: 8/10. i think it resembles some of the more expensive headphones. it feels good. i also love that it folds up nicely and is really portable.",
        "Comfort and fit: 9/10. pretty comfortable because of how soft the earpads and the headpad are. it fits my head pretty well, though i have to adjust it a bit to make it comfortable enough to wear. (i got a massive head). i’m able to wear this comfortably for hours. it’s that comfortable.",
        "Battery life: 9/10. it lasts pretty long. ever since i got it 3 days ago, the battery is still at 70% (out of the box, it was at 80%). with ANC on and 25-30% volume, it still is holding up pretty well.",
        "Sound: 7/10. it’s definitely bassy, especially when at 30%+ volume. it doesn’t sound the widest, but it’s still enjoyable to listen to. the clarity is there, though not that much but still good enough. i’d say they sound almost as good as Edifier’s P180 earphones, but more bass. easy to say, this headphone is not audiophile, but it’s fun to listen to.",
        "ANC mode: 6/10. this is my main gripe of this headphone. it blocks 50-60% of noise, which is okay, but the thing that’s been bothering me ever since i got it a few days ago was that when i turned on the ANC, it would make a crackling sound, only on my first day of using it. it would be so discomforting that i had to turn off the ANC to save my ears from that crackling sound. i don’t know if it’s normal or that i got a defective product, but that problem persisted until now, sadly. at least, that crackling sound is gone when i turn off the ANC mode.",
        "overall: 7/10. it’s a good wireless headphone with decent audio quality, but has mediocre ANC."
      ]
    },
    {
      title: "⬅️ Superlux HD681",
      badge: "in progress",
      image: "https://static.wixstatic.com/media/f30f79_9da7f6292032495e88444e342b821bfc~mv2.jpg",
      imageLeft: true,
      tldr: "",
      paragraphs: ["testing it right now. stay tuned..."]
    },
    {
      title: "EarFun Wave Pro ➡️",
      badge: "overall: 7.5 - 8/10",
      image: "https://static.wixstatic.com/media/f30f79_ea61e0ffa165437daa92c8387c433b4a~mv2.png",
      imageLeft: false,
      tldr: "Quality: overall, pretty good for this price range\nPerformance: tldr: neutral sounding, good battery life, good ANC, decent build quality, free case, meh transparency, meh wired audio quality.",
      paragraphs: [
        "this is the first time i’m using a rm250+ wireless headphones. been using it for a few days. here are my thoughts:",
        "1. build quality: 7.5/10. honestly, coming from the Picun ANC-05L, i kinda expected more here. i would say that i prefer the Picuns as they are built better and the finish felt a bit better with that somewhat rubbery feeling to the touch. at least, there’s a free headphone case tho. that’s a nice thing to include in the box.",
        "2. comfort: 8.5/10. these are super comfortable. definitely more comfortable than the Picuns. the memory foam ear pads and the head cushion are super soft, so i can definitely use these for more than an hour, especially in a cold environment. despite that, my ears do get hot after wearing them for a while because of pleather ear pads. plus, i have hyperhidrosis, so it’s easy for me to sweat in these headphones.",
        "3. ANC mode: 7.5/10. it’s really strong when you use the ‘Strong ANC’ mode in the EarFun App (yes you have to download the app to choose other ANC modes). i would say that it’s way stronger than the Picuns as it blocks a lot of noise, even though it doesn’t block the announcement voice when on a train. i’d say that it blocks out 75-80% of noise when using the ‘Strong ANC’ mode. still, i think it’s a major step up from the Picuns.",
        "4. Transparency mode: 5.5 or 6/10. i’m kinda on the fence here. on one hand, it works. on the other hand, not so much. i think it’s just there as a bonus feature. don’t get me wrong, it works, but it doesn’t sound natural and the amplified sounds around you pierces through your ears, so not recommended for long time use. also, not great for talking with others around you. it’s better to just remove your headphones to talk.",
        "5. battery life: 8/10. it’s pretty solid. 30-40% volume with ‘Wind-Reduction mode’ on, with an average of 4 hours of usage daily, it lasts pretty long. out of the box, it was 90%, and 4-5 days later, the battery sits at 60%, which is really nice. i think these can still last for another week. loving it.",
        "6. wireless sound: 8/10. these have ‘Hi-Res Wireless’, so of course, i expected them to sound good. soo, out of the box (no EQ), it sounds really natural for a pair of wireless headphones, regardless of which codecs used (i typically use the AAC codec as my iphone only supports that) and yet, it sounds really good. sure, it doesn’t have a wide soundstage, but the bass is clean and not overpowering, the clarity is also really good, like overall, it sounds clean. but, do note that these are not bass heavy, so not recommended for the ones that prefer a lot of bass as the bass do not hit that hard (you can try to EQ in the app if you want).",
        "7. wired sound (thru AUX cable): 5.5 or 6/10. i’d say it’s pretty much the same as the transparency mode, just a bonus feature. it sounds really boomy and boxed in. not wide-sounding. at least the clarity is somewhat there. i’m gonna take the ‘Hi-Res’ badge with a grain of salt next time i buy wireless headphones.",
        "overall: 7.5 or 8/10. i like these headphones, despite some of the shortcomings in terms of the build quality, the transparency, and the wired sound quality. still, everything else is solid. good job on your first pair of ANC headphones, EarFun!"
      ]
    },
    {
      title: "⬅️ EarFun Tune Pro",
      badge: "overall: 8.5/10",
      image: "https://static.wixstatic.com/media/f30f79_ea61e0ffa165437daa92c8387c433b4a~mv2.png",
      imageLeft: true,
      tldr: "Quality: pretty decent\nPerformance: tldr: decent build quality, decent comfort, awesome battery life, great sound (wired & wireless), good ANC, solid transparency. 8.5/10",
      paragraphs: [
        "i’ve tested the EarFun Tune Pro (left of first picture) and compared them to the EarFun Wave Pro (right of first picture). here are my thoughts:",
        "build quality: 9/10 for the earcups, 6.5/10 for the yokes and the headband. honestly, i prefer the more plush headband and the more trustworthy yokes on the EarFun Wave Pro, but i do like that the EarFun Tune Pro doesn’t have that ‘clack’ sound when shaking them by hand. still, i think the build quality is decent enough, just that you have to be extra careful when handling them.",
        "portability: 9/10. these headphones can fold. that’s good for bringing them everywhere you go. just that there isn’t a hardshell case included, unlike the Wave Pro. still, you can buy a cheap third-party hardshell case for rm20.",
        "battery life: 10/10. haven’t been able to kill the battery for almost a month now. sure, i don’t use it too often, but i did try to use it as much as possible, and yeah it’s so much better than the Wave Pro (which is still solid btw).",
        "comfort: 8/10. when i first used the Tune Pro, they were comfortable but not for long as the headband gives a tight pressure on my ears. after using them for a while, the headband somewhat loosened and i can wear them for longer now. nonetheless, i still prefer the comfort on the Wave Pro, despite being a bit looser and having less pressure, resulting in the headphones sliding from my head sometimes when i tilt my head up and down.",
        "ANC: 7.8/10. i’d say that it’s a slight improvement over the Wave Pro as i could hear less of my environment (it cancels more noise, but not by much). both of them are somewhat comparable. you can still hear faint sounds of people talking around you, but really faint. so that’s a good thing.",
        "transparency: 8/10. this is where there is a massive gap in terms of performance when compared to the Wave Pro. the transparency on the Tune Pro is so much better as i can hear my surroundings better. your voice might still be slightly muffled, but nonetheless, it’s much much much more usable than the Wave Pro. the Wave Pro’s transparency is too sibilant, and they amplify the sounds that are further from you, not whatever’s close to you, which makes them pointless if you want to have a conversation with anyone sitting beside you.",
        "wireless sound (bluetooth): 7.8/10. the Wave Pro with their LDAC codec does give them more resolution compared to the Tune Pro with just AAC. bass is noticeably less than the Wave Pro (which i like), instruments sound like how they should sound, and imaging is good, but the soundstage is slightly narrower than Wave Pro. also, the resolution is slightly less than the Wave Pro. still, the Tune Pro sounds really good overall at this price point.",
        "wired sound (aux and type c): 8/10. no question, these are better than the Wave Pro. vocals and instruments sound closer to my head and more intimate, but they are really clear. imaging is pretty good too. when talking about the Wave Pro, yeah their “Hi-Res Wired” certification is negligible as they sound really muffled and just bad, petrol station headphones bad. i’m glad that EarFun made the “Hi-Res Wired” certification on the Tune Pro mean something more than just a badge. again, Tune Pro sounds good wired.",
        "using ANC & transparency with aux in or type c in: 10/10. it just works. when i left them on, and plug a cable in, the ANC & transparency still works, so that’s really cool.",
        "overall: 8.5/10. really loving this. so much better than the Wave Pro."
      ]
    },
    {
      title: "Koss KSC75 ➡️",
      badge: "overall: 7.5/10",
      image: "",
      imageLeft: false,
      tldr: "Performance: solid. great sound. okay price.\nQuality: cheap but alright",
      paragraphs: [
        "could’ve been cheaper judging by the quality of the not-headphones, like perhaps around RM90-100, but at least i managed to get them for less than the retail price, around RM135.",
        "build quality: 5/10. the thin cables don’t guarantee long-term sustainability if i’m more rough with them, so i have to be careful. definitely recommended to do the detachable cables mod to make them last longer. additionally, i do like the design, distinct and interesting.",
        "sound quality: 8.5/10. not the clearest and most detailed, but damn, the soundstage is wideee and the tuning is real good. like legit the best that i’ve experienced yet. it has a bit of bass but not much, which i like. imaging is also solid. instruments and vocals sound clear. definitely a good starting point or endgame for those who want to dip their toes into the audiophole hobby.",
        "overall: 7.5/10. loving them so far. whenever i get the chance, i’ll do the detachable cables mod on them."
      ]
    }
  ],
  phones: [
    {
      title: "Infinix GT 10 Pro",
      badge: "overall: 6/10",
      image: "https://static.wixstatic.com/media/f30f79_d295e7a43d324f9f9b3e6237acea57af~mv2.webp",
      tldr: "Initial review:\nPerformance: pretty good, except for xos. but i’m willing to look past that\nQuality: plastic but feels nice\nglad i got this on the payday sale for rm778. love this phone already. can’t wait to try gaming on it.",
      paragraphs: [
        "i’ve used it for almost a month. here are some things that i want to nitpick about this phone:",
        "rear camera: not really 108mp, more like 16/32mp. but i’ve already expected this. as always, lower your expectations when it comes to buying a budget gaming device like this.",
        "operating system: the XOS is not that great across the board, especially the little things like bottom padding, and general gestures. it is a bit buggy, but maybe it’ll get fixed in the next software update.",
        "performance: the Dimensity 8050 chipset is a beast, mostly on android mobile games, especially online competitive games like PUBG and COD. but it’s not the greatest when it comes to emulation, specifically Aethersx2 (PS2 Emulator). Some games with run smoothly without any custom settings needed, but others might need some tweaking to make it run smoothly or at least, be playable. Games like Silent Hill 2, Silent Hill 3, Silent Hill 4, and Urban Reign ran pretty well (it depends on what version of Aethersx2 you installed. i installed the Nethersx2).",
        "custom rom compatibility: because of the Dimensity 8050 (made by Mediatek), there’s barely any custom roms available for it. so, i can’t just simply install one because of how i dislike XOS, but there is no other choice but to keep using XOS. who knows, maybe Mediatek will come to their senses and finally release their kernels to the masses so that custom roms can be made for Mediatek devices. i can only hope for now.",
        "overall: 6/10. not bad, Infinix. not bad."
      ]
    }
  ],
  voiceActing: {
    title: "my first unofficial voice-acting experience",
    bannerImage: "https://static.wixstatic.com/media/f30f79_3cdd107b3d5448158aafe48789b9b7c6~mv2.webp",
    video1Image: "https://static.wixstatic.com/media/f30f79_a487a199ae284fd7956501cf6c8fc079~mv2.webp",
    video1Url: "https://www.youtube.com/watch?v=oGE40MU-jSM",
    video2Image: "https://static.wixstatic.com/media/f30f79_567358f73fdf410cb71f2bade5f1efc0~mv2.jpg",
    video2Url: "https://www.youtube.com/watch?v=w42BHMPG4xU&t=2s",
    paragraphs: [
      "Voice-acting has been something I was always interested in since I was a kid. It’s also a knack of mine. When I first discovered I could imitate the voice of the famous Suneo Honekawa from Doraemon, I knew that voice-acting was something I wanted to pursue in the future.",
      "Which was why I didn’t decline when my classmates (or coursemates, to be precise) asked me to do voice-acting for the live radio drama performance for Artvaluate 5.0, held at UiTM Puncak Perdana on July 14, 2022.",
      "We had radio drama class this semester, and three selected radio dramas were to be performed live. I was involved in two. The first radio drama I was involved in was 1969, a radio drama about a man from 2020 accidentally being transported to 13 May 1969, where the events of the racial riots happened.",
      "I voiced the character Rahim, a police officer who helped the main character escape. I had to skip 30 years and turn into a 40-year-old man. It was challenging, but fun nonetheless.",
      "The second radio drama I was involved in was called Spaghetti Bolognese, a radio drama about a little boy trying to get the ingredients to make spaghetti bolognese.",
      "I voiced the character of Uncle David, an Indian, as non-Bumis do not attend our university. It was personally hard for me to channel Uncle David’s accent and tone as I am a Malay and I do not want to offend any Indians or stir any racial controversies. While it was fun to voice Uncle David, I was actually scared.",
      "Overall, it was a really fun experience. Although it wasn’t really something official, I finally got to experience something I was always interested in. I hope to be involved in actual voice-acting in the studios someday."
    ]
  },
  cyberdecks: {
    title: "the wonders of cyberdecks.",
    image1: "https://static.wixstatic.com/media/f30f79_2db1e3e317c14d26a1c251253c0c0ed4~mv2.jpg",
    image1SourceText: "necrohardware",
    image1SourceUrl: "https://www.instagram.com/p/CwSojQpIBOv/?igshid=MzRlODBiNWFlZA==",
    image2: "https://static.wixstatic.com/media/f30f79_8b43cb0882054ceb9aa42ba624bf28a5~mv2.jpg",
    image2SourceText: "hypertext",
    image2SourceUrl: "https://htxt.co.za/2020/02/11/the-reviiser-is-a-3d-printed-raspberry-pi-cyberdeck/",
    paragraphs: [
      "It was a few days ago. I was lying on the bed, scrolling through Instagram, when a post of a vintage Toshiba Libretto 70ct came into the feed and stole my attention. The design was old, but somehow refreshing and delightful to look at. It was aesthetically pleasing to me.",
      "And I thought to myself, \"Is it possible to get one of those and upgrade them in any way?\" because I'm not a huge fan of the old Windows 98 experience and prefer Windows 10. So, I searched across the internet, looking for ways to build one myself, even though I'm broke. well, I guess it wouldn't hurt knowing how much it would cost me to make such of contraption.",
      "Then, a picture popped out of the Google Images search results. It was some sort of a device that had a distinctive look, different than anything that I had seen. It looked modern and vintage at the same time. Somewhat cyberpunk-y.",
      "Because of an undying fascination, I went down a rabbit hole of custom-made machines on Google Images until I eventually found r/cyberDeck on Reddit. In the subreddit, there was a large amount of following sort of like a futuristic cult, with its users posting cyberdecks that they've created."
    ]
  },
  musicBurnout: {
    title: "music burnout (11.5.2024)",
    image: "https://static.wixstatic.com/media/f30f79_9584dcc025134cbebfbdcff5b9eff53f~mv2.png",
    paragraphs: [
      "The title sounds weird, right? 'Music' and 'burnout' in the same sentence? It is a term (that I made up) for a phenomenon that overwhelms one’s desire to listen to music that has been on their 'To Listen' or 'Listen Later' playlist or in their music streaming library. Of course, it’s not really a phenomenon as I’m the only one experiencing this, maybe.",
      "For example, when Olivia Rodrigo released her 'GUTS' album last year, I was ecstatic to listen to it and decided to add it into my Apple Music library. Months later, I still have not listened to that album until now (except for a few tracks like All-American B****, Bad Idea Right?, and Love Is Embarassing which are bangers. It was my girlfriend's fault). The album has always been in the depths of my music library, waiting to be unearthed and discovered.",
      "One factor might be that I always expect to give a score after I listen to any form of music, albeit an album, or a song, and I'm afraid to give a bad score instead of just enjoying the music, whether it be good or bad. Because of this, I'm scared to discover new music and always stay in the comfort zone (familiar music, repeating the same playlists). I would only add new music that YouTube recommended to me or from my brother’s playlist.",
      "Another factor is that there’s just too much new music to keep up with nowadays, including new movies, TV shows, and games to the point where new interesting music gets abandoned. The fact is, I love music as much as I love films, sometimes even more than anything else.",
      "(takde geng nak dengar album yang i alone want to listen to, sometimes rasa tak semangat nak dengar album tu, jadinya tak terdengar.) It’s always fun to listen to new music with people that I love, but they have different tastes in music",
      "The only way to enjoy new music is to just put everything else on hold and force myself to focus on the music that I already got in my music library. I sure hope that I can keep up with the dozens of abandoned music. Wish me luck."
    ]
  }
};

let SITE_CONTENT = JSON.parse(JSON.stringify(DEFAULT_CONTENT));
let adminActiveTab = "layouts";
let adminSession = {
  authenticated: false,
  token: "",
  user: null
};

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function updateFooterFromContent() {
  const h = SITE_CONTENT.home || DEFAULT_CONTENT.home;
  const emailEl = document.getElementById("footer-email");
  if (emailEl) {
    emailEl.textContent = h.email;
    emailEl.href = `mailto:${h.email}?subject=my%20email`;
  }
  const igEl = document.getElementById("footer-ig");
  if (igEl) {
    igEl.textContent = h.instagramHandle;
    igEl.href = h.instagramUrl;
  }
  const tkEl = document.getElementById("footer-tiktok");
  if (tkEl) tkEl.textContent = h.tiktok;
  const twEl = document.getElementById("footer-twitter");
  if (twEl) twEl.textContent = h.twitter;
  const cpEl = document.getElementById("footer-copyright");
  if (cpEl) cpEl.textContent = h.copyright;
  const leEl = document.getElementById("footer-lastedit");
  if (leEl) leEl.textContent = `last edit: ${h.lastEdit}`;
  applyGlobalLayoutSettings();
}

// ==================== DEFAULT PAGE LAYOUTS ====================
const DEFAULT_LAYOUTS = {
  global: {
    headerStyle: "split", // "split" | "centered" | "compact"
    accentColor: "#df2929",
    fontMode: "typewriter", // "typewriter" | "mono" | "editorial" | "modern"
    showFilmGrain: true
  },
  home: {
    containerWidth: "standard", // "narrow" | "standard" | "wide"
    heroLayout: "collage", // "collage" | "stacked-center" | "reversed"
    aboutLayout: "text-left", // "text-left" | "photo-left" | "stacked"
    directoryColumns: "3", // "1" | "2" | "3"
    sectionOrder: ["hero", "intro", "about", "quote", "directory"],
    hiddenSections: []
  },
  scripts: {
    containerWidth: "standard",
    viewMode: "list", // "list" | "grid-2" | "grid-3"
    groupOrder: "diploma-first" // "diploma-first" | "degree-first"
  },
  anna: {
    readingWidth: "standard", // "narrow" | "standard" | "wide"
    fontSize: "medium", // "small" | "medium" | "large"
    textAlign: "left", // "left" | "justify"
    dropCap: false
  },
  sinisterRoots: {
    containerWidth: "standard",
    bannerTheme: "olive", // "olive" | "crimson" | "monochrome"
    showcaseLayout: "cover-left" // "cover-left" | "cover-right" | "centered"
  },
  audioDevices: {
    containerWidth: "standard",
    columns: "1", // "1" | "2"
    cardStyle: "alternating", // "alternating" | "image-left" | "image-right" | "stacked"
    showBadges: true,
    showTldr: true
  },
  phones: {
    containerWidth: "standard",
    columns: "1", // "1" | "2"
    cardStyle: "image-right", // "image-right" | "image-left" | "stacked"
    showBadges: true
  },
  voiceActing: {
    readingWidth: "standard",
    fontSize: "medium",
    textAlign: "left"
  },
  cyberdecks: {
    readingWidth: "standard",
    fontSize: "medium",
    headingColor: "cyber-blue" // "cyber-blue" | "red" | "white"
  },
  musicBurnout: {
    readingWidth: "standard",
    fontSize: "medium",
    imagePosition: "bottom" // "bottom" | "top" | "hidden"
  },
  freeformPositions: {},
  elementStyles: {},
  customElements: {}
};

function getLayouts() {
  if (!SITE_CONTENT.layouts) {
    SITE_CONTENT.layouts = JSON.parse(JSON.stringify(DEFAULT_LAYOUTS));
  }
  for (const k of Object.keys(DEFAULT_LAYOUTS)) {
    if (!SITE_CONTENT.layouts[k]) {
      SITE_CONTENT.layouts[k] = JSON.parse(JSON.stringify(DEFAULT_LAYOUTS[k]));
    } else {
      SITE_CONTENT.layouts[k] = { ...DEFAULT_LAYOUTS[k], ...SITE_CONTENT.layouts[k] };
    }
  }
  return SITE_CONTENT.layouts;
}

function applyGlobalLayoutSettings() {
  const g = getLayouts().global;
  const root = document.documentElement;
  const isLight = document.body.classList.contains("light-mode");
  if (isLight) {
    root.style.setProperty("--red", "#7b2cbf");
    root.style.setProperty("--red-hover", "#9d4edd");
  } else if (g.accentColor) {
    root.style.setProperty("--red", g.accentColor);
    root.style.setProperty("--red-hover", g.accentColor);
  }
  document.body.classList.toggle("no-grain", g.showFilmGrain === false);
  document.body.classList.remove("font-mode-mono", "font-mode-editorial", "font-mode-modern");
  if (g.fontMode && g.fontMode !== "typewriter") {
    document.body.classList.add(`font-mode-${g.fontMode}`);
  }
  const header = document.querySelector(".site-header");
  if (header) {
    header.classList.remove("header-centered", "header-compact");
    if (g.headerStyle === "centered") header.classList.add("header-centered");
    if (g.headerStyle === "compact") header.classList.add("header-compact");
  }
  updateDynamicFavicon();
}

function updateDynamicFavicon() {
  try {
    const isLight = document.body.classList.contains("light-mode");
    const g = getLayouts().global;
    const accent = isLight ? "#7b2cbf" : (g.accentColor || "#df2929");
    const bg = isLight ? "#f6f4ef" : "#0a0a0a";
    const fg = isLight ? "#161514" : "#f2f0ea";

    const drawIcon = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Rounded badge background
      const r = 22;
      ctx.beginPath();
      ctx.moveTo(4 + r, 4);
      ctx.lineTo(124 - r, 4);
      ctx.quadraticCurveTo(124, 4, 124, 4 + r);
      ctx.lineTo(124, 124 - r);
      ctx.quadraticCurveTo(124, 124, 124 - r, 124);
      ctx.lineTo(4 + r, 124);
      ctx.quadraticCurveTo(4, 124, 4, 124 - r);
      ctx.lineTo(4, 4 + r);
      ctx.quadraticCurveTo(4, 4, 4 + r, 4);
      ctx.closePath();
      ctx.fillStyle = bg;
      ctx.fill();
      ctx.lineWidth = 6;
      ctx.strokeStyle = accent;
      ctx.stroke();

      // Render "i.a." using exact heading font ('Special Elite')
      ctx.font = "58px 'Special Elite', 'Courier Prime', monospace";
      ctx.textBaseline = "middle";

      const parts = [
        { text: "i", color: fg },
        { text: ".", color: accent },
        { text: "a", color: fg },
        { text: ".", color: accent }
      ];
      const widths = parts.map((p) => ctx.measureText(p.text).width);
      const totalW = widths.reduce((a, b) => a + b, 0);
      let x = (128 - totalW) / 2;
      const y = 68;

      parts.forEach((p, idx) => {
        ctx.fillStyle = p.color;
        ctx.fillText(p.text, x, y);
        x += widths[idx];
      });

      const link = document.getElementById("site-favicon");
      if (link) {
        link.type = "image/png";
        link.href = canvas.toDataURL("image/png");
      }
    };

    drawIcon();
    if (document.fonts && document.fonts.load) {
      document.fonts.load("58px 'Special Elite'").then(drawIcon).catch(() => {});
    }
  } catch (_) {}
}

function applyThemeMode(isLight) {
  document.documentElement.classList.toggle("light-mode", isLight);
  document.body.classList.toggle("light-mode", isLight);
  const cb = document.getElementById("theme-switch-cb");
  if (cb && cb.checked !== isLight) {
    cb.checked = isLight;
  }
  applyGlobalLayoutSettings();
}

let activePreviewDevice = "pc";
let activePreviewRoute = "home";
let visualDragModeEnabled = true;

const DEVICE_PRESETS = {
  pc: { label: "🖥 PC / Desktop", width: "100%", maxW: "1080px", height: "620px", isPkb: false, dims: "1280 × 800 Widescreen" },
  tablet: { label: "📱 Tablet", width: "768px", maxW: "768px", height: "680px", isPkb: false, dims: "768 × 1024 iPad / Tablet" },
  phone: { label: "📱 Phone", width: "390px", maxW: "390px", height: "680px", isPkb: false, dims: "390 × 844 Smartphone" },
  clicks: { label: "⌨️ Clicks Communicator (PKB)", width: "360px", maxW: "360px", height: "440px", isPkb: true, dims: "360 × 520 Squat Viewport + Physical QWERTY" }
};

// ==================== PAGE RENDERERS ====================
const PAGES = {
  "home": {
    title: "Home | iskandar afiq",
    render: () => {
      const h = SITE_CONTENT.home;
      const lay = getLayouts().home;
      const hidden = new Set(lay.hiddenSections || []);
      const heroClass = lay.heroLayout === "stacked-center"
        ? "hero-collage hero-stacked-center"
        : lay.heroLayout === "reversed"
        ? "hero-collage hero-reversed"
        : "hero-collage";
      const aboutClass = lay.aboutLayout === "photo-left"
        ? "about-grid about-photo-left"
        : lay.aboutLayout === "stacked"
        ? "about-grid about-stacked"
        : "about-grid";
      const dirColsClass = `directory-grid cols-${lay.directoryColumns || "3"}`;

      const blocks = {
        hero: `
          <div class="${heroClass}">
            <div class="hero-left-stack" data-drag-id="home-hero-photo-1">
              <img class="hero-main-photo" src="${escapeHtml(h.heroPhotoMain)}" alt="iskandar afiq looking down from staircase" />
              <div class="hero-scroll-prompt" data-drag-id="home-scroll-prompt">
                <div>
                  scroll down<br/>
                  to know<br/>
                  about <span class="red-word">him</span>
                </div>
                <img class="red-star-arrow" src="https://static.wixstatic.com/media/f30f79_16da3c54ba104bfcb65db6abc5366094~mv2.png" alt="decorative red star and arrow" />
              </div>
            </div>

            <div class="hero-right-stack" data-drag-id="home-hero-photo-2">
              <div class="hero-secondary-photo-wrap">
                <img class="hero-secondary-photo" src="${escapeHtml(h.heroPhotoSecondary)}" alt="iskandar afiq on staircase" />
                <a href="${escapeHtml(h.instagramUrl)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(h.instagramHandle)} on Instagram" data-drag-id="home-pixel-smiley">
                  <img class="pixel-smiley" src="${escapeHtml(h.pixelSmiley)}" alt="pixel art smiley" />
                </a>
              </div>
            </div>
          </div>
        `,
        intro: `
          <div class="intro-statement" data-drag-id="home-intro-statement">
            <h1 class="typewriter-title">${escapeHtml(h.headline)}<span class="red-dot">.</span></h1>
            <p class="intro-sub">${escapeHtml(h.subheadline)}</p>
          </div>
        `,
        about: `
          <div class="${aboutClass}" id="about-him">
            <div class="about-text" data-drag-id="home-about-text">
              <h2 class="typewriter-title" style="font-size: 2.2rem; margin-bottom: 1.25rem;">
                about <span class="red-accent">him</span>.
              </h2>
              ${(h.aboutParagraphs || []).map(p => `<p>${escapeHtml(p)}</p>`).join("")}
            </div>

            <div class="about-photo-card" data-drag-id="home-about-photo">
              <img src="${escapeHtml(h.aboutPhoto)}" alt="iskandar afiq portrait" />
            </div>
          </div>
        `,
        quote: `
          <div class="quote-banner" data-drag-id="home-quote-banner">
            <blockquote>“${escapeHtml(h.quote)}”</blockquote>
            <cite>- ${escapeHtml(h.quoteAuthor)}</cite>
          </div>
        `,
        directory: `
          <div class="home-directory" data-drag-id="home-directory">
            <h3 class="typewriter-title" style="font-size: 1.65rem;">explore the archive<span class="red-dot">.</span></h3>
            <div class="${dirColsClass}">
              <div class="dir-card" onclick="navigateTo('my-scripts')">
                <div>
                  <div class="dir-category">works.</div>
                  <div class="dir-title">my scripts sample.</div>
                  <div class="dir-desc">Chronological archive of film, TV, radio drama, and stage play scripts from Diploma &amp; Degree.</div>
                </div>
              </div>
              <div class="dir-card" onclick="navigateTo('anna')">
                <div>
                  <div class="dir-category">works.</div>
                  <div class="dir-title">anna. (short story)</div>
                  <div class="dir-desc">Apocalyptic psychological sci-fi short story following Anna through a crumbling world and the Cylops.</div>
                </div>
              </div>
              <div class="dir-card" onclick="navigateTo('sinister-roots-zine')">
                <div>
                  <div class="dir-category">works.</div>
                  <div class="dir-title">sinister roots (zine)</div>
                  <div class="dir-desc">End-of-semester anthology zine exploring interconnected timelines grown from the same sinister tree.</div>
                </div>
              </div>
              <div class="dir-card" onclick="navigateTo('audio-devices')">
                <div>
                  <div class="dir-category">tech reviews</div>
                  <div class="dir-title">audio devices.</div>
                  <div class="dir-desc">Hands-on reviews of Baseus Bowie D03, Picun ANC-05L, Superlux HD681, EarFun Wave Pro, EarFun Tune Pro &amp; Koss KSC75.</div>
                </div>
              </div>
              <div class="dir-card" onclick="navigateTo('phones')">
                <div>
                  <div class="dir-category">tech reviews</div>
                  <div class="dir-title">phones.</div>
                  <div class="dir-desc">Initial and 1-month review of the Infinix GT 10 Pro (Dimensity 8050, XOS, and PS2 emulation).</div>
                </div>
              </div>
              <div class="dir-card" onclick="navigateTo('first-unofficial-voice-acting-experience')">
                <div>
                  <div class="dir-category">experiences.</div>
                  <div class="dir-title">voice-acting experience</div>
                  <div class="dir-desc">Live radio drama performances for Artvaluate 5.0 at UiTM Puncak Perdana: 1969 &amp; Spaghetti Bolognese.</div>
                </div>
              </div>
              <div class="dir-card" onclick="navigateTo('wonders-of-cyberdecks')">
                <div>
                  <div class="dir-category">fantasizing tech.</div>
                  <div class="dir-title">wonders of cyberdecks.</div>
                  <div class="dir-desc">Down the rabbit hole of vintage Toshiba Libretto 70ct laptops, The Reviiser, and r/cyberDeck.</div>
                </div>
              </div>
              <div class="dir-card" onclick="navigateTo('music-burnout')">
                <div>
                  <div class="dir-category">shoughrts.</div>
                  <div class="dir-title">music burnout (11.5.2024)</div>
                  <div class="dir-desc">Why new albums sit unplayed in our streaming libraries and the comfort zone of familiar playlists.</div>
                </div>
              </div>
            </div>
          </div>
        `
      };

      const order = lay.sectionOrder || ["hero", "intro", "about", "quote", "directory"];
      return `
        <section class="page-section width-${lay.containerWidth || 'standard'}">
          ${order.filter(key => !hidden.has(key) && blocks[key]).map(key => blocks[key]).join("")}
        </section>
      `;
    }
  },

  "my-scripts": {
    title: "my scripts sample. | iskandar afiq",
    render: () => {
      const s = SITE_CONTENT.scripts;
      const lay = getLayouts().scripts;
      const listClass = lay.viewMode === "grid-2"
        ? "script-list mode-grid-2"
        : lay.viewMode === "grid-3"
        ? "script-list mode-grid-3"
        : "script-list";

      const diplomaBlock = `
        <div class="scripts-group" data-drag-id="scripts-diploma-group">
          <h2 class="scripts-group-heading">diploma:</h2>
          <div class="${listClass}">
            ${(s.diploma || []).map((item, idx) => `
              <div class="script-row" data-drag-id="script-diploma-${idx}">
                <span class="script-name">${escapeHtml(item.title)}</span>
                <a class="download-btn" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">download. ↗</a>
              </div>
            `).join("")}
          </div>
        </div>
      `;

      const degreeBlock = `
        <div class="scripts-group" data-drag-id="scripts-degree-group">
          <h2 class="scripts-group-heading">degree:</h2>
          <div class="${listClass}">
            ${(s.degree || []).map((item, idx) => `
              <div class="script-row" data-drag-id="script-degree-${idx}">
                <span class="script-name">${escapeHtml(item.title)}</span>
                <a class="download-btn" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">download. ↗</a>
              </div>
            `).join("")}
          </div>
        </div>
      `;

      return `
      <section class="page-section width-${lay.containerWidth || 'standard'}">
        <h1 class="typewriter-title">my scripts sample<span class="red-dot">.</span></h1>
        <p class="intro-sub" style="margin-bottom: 2.5rem; white-space: pre-line;">${escapeHtml(s.intro)}</p>
        ${lay.groupOrder === "degree-first" ? degreeBlock + diplomaBlock : diplomaBlock + degreeBlock}
      </section>
      `;
    }
  },

  "anna": {
    title: "anna. (short story) | iskandar afiq",
    render: () => {
      const a = SITE_CONTENT.anna;
      const lay = getLayouts().anna;
      const bodyClasses = [
        "story-body",
        `font-${lay.fontSize || "medium"}`,
        lay.textAlign === "justify" ? "align-justify" : "",
        lay.dropCap ? "drop-cap" : ""
      ].filter(Boolean).join(" ");

      return `
      <section class="page-section">
        <div class="story-container read-${lay.readingWidth || 'standard'}" data-drag-id="anna-story-container">
          <h1 class="typewriter-title">${escapeHtml(a.title)}<span class="red-dot">.</span></h1>
          <div class="story-meta">${escapeHtml(a.subtitle)}</div>
          <div class="${bodyClasses}">
            ${(a.paragraphs || []).map(p => {
              if (p.startsWith("## ")) {
                return `<div class="story-time-marker">${escapeHtml(p.replace(/^##\s*/, ""))}</div>`;
              }
              return `<p>${escapeHtml(p)}</p>`;
            }).join("")}
          </div>
        </div>
      </section>
      `;
    }
  },

  "sinister-roots-zine": {
    title: "sinister roots (zine sample) | iskandar afiq",
    render: () => {
      const sr = SITE_CONTENT.sinisterRoots;
      const lay = getLayouts().sinisterRoots;
      const bannerClass = lay.bannerTheme === "crimson"
        ? "sinister-banner theme-crimson"
        : lay.bannerTheme === "monochrome"
        ? "sinister-banner theme-monochrome"
        : "sinister-banner";
      const showcaseClass = lay.showcaseLayout === "cover-right"
        ? "zine-showcase showcase-cover-right"
        : lay.showcaseLayout === "centered"
        ? "zine-showcase showcase-centered"
        : "zine-showcase";

      return `
      <section class="page-section width-${lay.containerWidth || 'standard'}">
        <div class="${bannerClass}" data-drag-id="sinister-banner">
          <h1>${escapeHtml(sr.title)}</h1>
          <p>${escapeHtml(sr.description)}</p>
        </div>

        <div class="${showcaseClass}">
          <div data-drag-id="sinister-cover-img">
            <img class="zine-cover" src="${escapeHtml(sr.coverImage)}" alt="sinister roots zine front cover" />
          </div>
          <div data-drag-id="sinister-details">
            <h2 class="typewriter-title" style="font-size: 1.85rem;">sinister roots.pdf</h2>
            <p style="font-family: var(--font-sans); color: var(--text-muted); margin-bottom: 1rem;">
              below is the front cover of the zine, and the download link.
            </p>
            <div class="warning-box">${escapeHtml(sr.warning)}</div>
            <p style="font-family: var(--font-mono); margin-bottom: 0.75rem;">anyways, enjoy.</p>
            <p style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.75rem;">
              ${escapeHtml(sr.note)}
            </p>
            <a class="download-btn" href="${escapeHtml(sr.pdfUrl)}" target="_blank" rel="noopener noreferrer">
              download sinister roots.pdf ↗
            </a>
          </div>
        </div>
      </section>
      `;
    }
  },

  "audio-devices": {
    title: "audio devices. | iskandar afiq",
    render: () => {
      const lay = getLayouts().audioDevices;
      const stackClass = lay.columns === "2" ? "reviews-stack reviews-grid-2" : "reviews-stack";

      return `
      <section class="page-section width-${lay.containerWidth || 'standard'}">
        <div class="story-meta">tech reviews</div>
        <h1 class="typewriter-title">audio devices<span class="red-dot">.</span></h1>
        <p class="intro-sub">
          here are my reviews on some headphones and earphones, whether they have Bluetooth or not.<br/>
          <span style="font-size: 0.9rem; opacity: 0.8;">note: some of these i initially wrote in the Shopee reviews section, but i put them here as well.</span>
        </p>

        <div class="${stackClass}">
          ${(SITE_CONTENT.audioDevices || []).map((item, idx) => {
            const hasImg = Boolean(item.image && item.image.trim());
            const isStacked = lay.cardStyle === "stacked" || lay.columns === "2";
            const useImgLeft = lay.cardStyle === "image-left"
              ? true
              : lay.cardStyle === "image-right"
              ? false
              : (item.imageLeft ?? (idx % 2 === 0));
            const cardClass = [
              "review-card",
              hasImg && useImgLeft && !isStacked ? "image-left" : "",
              isStacked ? "layout-stacked" : ""
            ].filter(Boolean).join(" ");
            const cardStyle = !hasImg ? 'style="grid-template-columns: 1fr;"' : "";
            const imgBlock = hasImg ? `<div class="review-media" data-drag-id="audio-photo-${idx}"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" /></div>` : "";
            const contentBlock = `
              <div class="review-content" data-drag-id="audio-text-${idx}">
                <div class="review-header">
                  <h2 class="review-title">${escapeHtml(item.title)}</h2>
                  ${lay.showBadges !== false ? `<span class="review-score-badge">${escapeHtml(item.badge)}</span>` : ""}
                </div>
                ${lay.showTldr !== false && item.tldr ? `<div class="review-tldr" style="white-space: pre-line;">${escapeHtml(item.tldr)}</div>` : ""}
                ${(item.paragraphs || []).map(p => `<p>${escapeHtml(p)}</p>`).join("")}
              </div>
            `;
            return `
              <article class="${cardClass}" ${cardStyle}>
                ${isStacked ? imgBlock + contentBlock : (useImgLeft ? imgBlock + contentBlock : contentBlock + imgBlock)}
              </article>
            `;
          }).join("")}
        </div>
      </section>
      `;
    }
  },

  "phones": {
    title: "phones. | iskandar afiq",
    render: () => {
      const lay = getLayouts().phones;
      const stackClass = lay.columns === "2" ? "reviews-stack reviews-grid-2" : "reviews-stack";

      return `
      <section class="page-section width-${lay.containerWidth || 'standard'}">
        <div class="story-meta">tech reviews</div>
        <h1 class="typewriter-title">phones<span class="red-dot">.</span></h1>
        <p class="intro-sub">here are my reviews on some phones. if i got the budget, i'll review it.</p>

        <div class="${stackClass}">
          ${(SITE_CONTENT.phones || []).map((item, idx) => {
            const hasImg = Boolean(item.image && item.image.trim());
            const isStacked = lay.cardStyle === "stacked" || lay.columns === "2";
            const useImgLeft = lay.cardStyle === "image-left";
            const cardClass = [
              "review-card",
              hasImg && useImgLeft && !isStacked ? "image-left" : "",
              isStacked ? "layout-stacked" : ""
            ].filter(Boolean).join(" ");
            const imgBlock = hasImg ? `<div class="review-media" data-drag-id="phone-photo-${idx}"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" /></div>` : "";
            const contentBlock = `
              <div class="review-content" data-drag-id="phone-text-${idx}">
                <div class="review-header">
                  <h2 class="review-title">${escapeHtml(item.title)}</h2>
                  ${lay.showBadges !== false ? `<span class="review-score-badge">${escapeHtml(item.badge)}</span>` : ""}
                </div>
                ${item.tldr ? `<div class="review-tldr" style="white-space: pre-line;">${escapeHtml(item.tldr)}</div>` : ""}
                <h3 class="typewriter-title" style="font-size: 1.35rem; color: var(--red); margin: 1.5rem 0 0.75rem;">Updated Review:</h3>
                ${(item.paragraphs || []).map(p => `<p>${escapeHtml(p)}</p>`).join("")}
                <p style="font-family: var(--font-mono); color: var(--text-muted); margin-top: 1.5rem;">more phones coming soon when i have budget...</p>
              </div>
            `;
            return `
              <article class="${cardClass}" ${!hasImg ? 'style="grid-template-columns: 1fr;"' : ""}>
                ${isStacked ? imgBlock + contentBlock : (useImgLeft ? imgBlock + contentBlock : contentBlock + imgBlock)}
              </article>
            `;
          }).join("")}
        </div>
      </section>
      `;
    }
  },

  "first-unofficial-voice-acting-experience": {
    title: "first unofficial voice-acting experience | iskandar afiq",
    render: () => {
      const va = SITE_CONTENT.voiceActing;
      const lay = getLayouts().voiceActing;
      const p = va.paragraphs || [];
      const bodyClass = `story-body font-${lay.fontSize || 'medium'} ${lay.textAlign === 'justify' ? 'align-justify' : ''}`;
      return `
      <section class="page-section">
        <div class="story-container read-${lay.readingWidth || 'standard'}">
          <div class="story-meta">experiences.</div>
          <h1 class="typewriter-title">${escapeHtml(va.title)}<span class="red-dot">.</span></h1>

          <div class="${bodyClass}">
            ${p[0] ? `<p>${escapeHtml(p[0])}</p>` : ""}
            ${p[1] ? `<p>${escapeHtml(p[1])}</p>` : ""}

            <div class="feature-figure" data-drag-id="va-banner-img">
              <img src="${escapeHtml(va.bannerImage)}" alt="Artvaluate 5.0 Radio Drama" />
            </div>

            ${p[2] ? `<p>${escapeHtml(p[2])}</p>` : ""}
            ${p[3] ? `<p>${escapeHtml(p[3])}</p>` : ""}

            <p>You can catch my performance of Rahim in <em>1969</em> here (click on the image). I’m the guy in the middle:</p>

            <a class="video-link-card" href="${escapeHtml(va.video1Url)}" target="_blank" rel="noopener noreferrer" data-drag-id="va-video-1">
              <img src="${escapeHtml(va.video1Image)}" alt="Rahim in 1969 live radio drama performance" />
              <span class="video-play-badge">▶ Watch 1969 on YouTube</span>
            </a>

            ${p[4] ? `<p>${escapeHtml(p[4])}</p>` : ""}
            ${p[5] ? `<p>${escapeHtml(p[5])}</p>` : ""}

            <p>You can watch Uncle David in <em>Spaghetti Bolognese</em> here (click on the image). I’m the guy in the flannel:</p>

            <a class="video-link-card" href="${escapeHtml(va.video2Url)}" target="_blank" rel="noopener noreferrer" data-drag-id="va-video-2">
              <img src="${escapeHtml(va.video2Image)}" alt="Uncle David in Spaghetti Bolognese live radio drama performance" />
              <span class="video-play-badge">▶ Watch Spaghetti Bolognese on YouTube</span>
            </a>

            ${p.slice(6).map(para => `<p>${escapeHtml(para)}</p>`).join("")}
          </div>
        </div>
      </section>
      `;
    }
  },

  "wonders-of-cyberdecks": {
    title: "wonders of cyberdecks. | iskandar afiq",
    render: () => {
      const cb = SITE_CONTENT.cyberdecks;
      const lay = getLayouts().cyberdecks;
      const p = cb.paragraphs || [];
      const hColor = lay.headingColor === "red" ? "var(--red)" : lay.headingColor === "white" ? "#fff" : "var(--cyber-blue)";
      return `
      <section class="page-section">
        <div class="story-container read-${lay.readingWidth || 'standard'}">
          <div class="story-meta">fantasizing tech.</div>
          <h1 class="cyber-heading" style="color: ${hColor};">${escapeHtml(cb.title)}</h1>

          <div class="story-body font-${lay.fontSize || 'medium'}">
            ${p[0] ? `<p>${escapeHtml(p[0])}</p>` : ""}

            <div class="feature-figure" data-drag-id="cyber-img-1">
              <img src="${escapeHtml(cb.image1)}" alt="Toshiba Libretto 70ct" />
              <div class="feature-caption">
                Toshiba Libretto 70ct (instagram: <a href="${escapeHtml(cb.image1SourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(cb.image1SourceText)}</a>)
              </div>
            </div>

            ${p[1] ? `<p>${escapeHtml(p[1])}</p>` : ""}
            ${p[2] ? `<p>${escapeHtml(p[2])}</p>` : ""}

            <div class="feature-figure" data-drag-id="cyber-img-2">
              <img src="${escapeHtml(cb.image2)}" alt="The Reviiser 3D printed Raspberry Pi cyberdeck" />
              <div class="feature-caption">
                The Reviiser. (Source: <a href="${escapeHtml(cb.image2SourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(cb.image2SourceText)}</a>)
              </div>
            </div>

            ${p.slice(3).map(para => `<p>${escapeHtml(para)}</p>`).join("")}
          </div>
        </div>
      </section>
      `;
    }
  },

  "music-burnout": {
    title: "music burnout (11.5.2024) | iskandar afiq",
    render: () => {
      const mb = SITE_CONTENT.musicBurnout;
      const lay = getLayouts().musicBurnout;
      const imgBlock = lay.imagePosition === "hidden" ? "" : `
        <div class="feature-figure" data-drag-id="music-burnout-img" style="max-width: 280px; margin: 2rem auto; background: transparent; border: none;">
          <img src="${escapeHtml(mb.image)}" alt="music burnout illustration" />
        </div>
      `;
      return `
      <section class="page-section">
        <div class="story-container read-${lay.readingWidth || 'standard'}">
          <div class="story-meta">shoughrts.</div>
          <h1 class="typewriter-title">${escapeHtml(mb.title)}</h1>
          ${lay.imagePosition === "top" ? imgBlock : ""}
          <div class="story-body font-${lay.fontSize || 'medium'}">
            ${(mb.paragraphs || []).map(p => `<p>${escapeHtml(p)}</p>`).join("")}
            ${lay.imagePosition !== "top" ? imgBlock : ""}
          </div>
        </div>
      </section>
      `;
    }
  },

  // ==================== ADMIN INTERFACE ====================
  "admin": {
    title: "Admin Editor | iskandar afiq",
    render: () => renderAdminView()
  }
};

// ==================== ADMIN AUTH & CMS LOGIC ====================
const ADMIN_PASS = "WRITER777!";

function renderAdminView() {
  if (!adminSession.authenticated) {
    return `
      <section class="page-section">
        <div class="admin-login-box">
          <span class="admin-badge">restricted access · admin only</span>
          <h1 class="typewriter-title" style="font-size: 2rem; margin-bottom: 0.65rem;">admin login<span class="red-dot">.</span></h1>
          <p style="font-family: var(--font-sans); color: var(--text-muted); font-size: 0.94rem; margin-bottom: 1.5rem;">
            Enter your admin password to unlock the portfolio editor for <strong>iskandar afiq</strong>.
          </p>

          <div id="admin-login-error" class="admin-status-bar"></div>

          <form onsubmit="handleAdminLogin(event)">
            <div class="admin-field">
              <label for="admin-password-input">Admin Password</label>
              <input
                id="admin-password-input"
                type="password"
                class="admin-input"
                placeholder="Enter admin password..."
                required
                autocomplete="current-password"
              />
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
              <button type="submit" id="admin-login-btn" class="admin-btn admin-btn-primary">
                unlock admin editor →
              </button>
            </div>
          </form>
        </div>
      </section>
    `;
  }

  return `
    <section class="page-section">
      <div class="admin-topbar">
        <div class="admin-user-pill">
          <div>
            <strong style="color: var(--red);">admin:</strong> iskandar afiq (@${GITHUB_OWNER})
          </div>
        </div>

        <div class="admin-actions">
          <button type="button" class="admin-btn" onclick="saveAdminDraftAndNotify()">
            💾 save changes
          </button>
          <button type="button" class="admin-btn" onclick="switchAdminTab('layouts')">
            📐 layouts &amp; device preview
          </button>
          <button type="button" class="admin-btn" onclick="navigateTo('home')">
            👁 view live site
          </button>
          <button type="button" class="admin-btn admin-btn-primary" id="publish-github-btn" onclick="publishToGitHub()">
            🚀 publish to live GitHub
          </button>
          <button type="button" class="admin-btn admin-btn-danger" onclick="handleAdminLogout()">
            sign out
          </button>
        </div>
      </div>

      <div id="admin-status-bar" class="admin-status-bar"></div>

      <div class="admin-tabs">
        <button type="button" class="admin-tab-btn ${adminActiveTab === 'layouts' ? 'active' : ''}" onclick="switchAdminTab('layouts')">📐 page layouts &amp; device preview</button>
        <button type="button" class="admin-tab-btn ${adminActiveTab === 'home' ? 'active' : ''}" onclick="switchAdminTab('home')">1. home &amp; bio</button>
        <button type="button" class="admin-tab-btn ${adminActiveTab === 'scripts' ? 'active' : ''}" onclick="switchAdminTab('scripts')">2. scripts &amp; zine</button>
        <button type="button" class="admin-tab-btn ${adminActiveTab === 'anna' ? 'active' : ''}" onclick="switchAdminTab('anna')">3. anna (story)</button>
        <button type="button" class="admin-tab-btn ${adminActiveTab === 'reviews' ? 'active' : ''}" onclick="switchAdminTab('reviews')">4. tech reviews</button>
        <button type="button" class="admin-tab-btn ${adminActiveTab === 'articles' ? 'active' : ''}" onclick="switchAdminTab('articles')">5. experiences &amp; thoughts</button>
        <button type="button" class="admin-tab-btn ${adminActiveTab === 'settings' ? 'active' : ''}" onclick="switchAdminTab('settings')">⚙ github sync</button>
      </div>

      <div id="admin-tab-content">
        ${renderAdminTabContent()}
      </div>
    </section>
  `;
}

function showAdminStatus(message, isError = false) {
  const bar = document.getElementById("admin-status-bar") || document.getElementById("admin-login-error");
  if (!bar) return;
  bar.textContent = message;
  bar.style.borderLeftColor = isError ? "#ff4d4d" : "#40c057";
  bar.style.background = isError ? "rgba(223, 41, 41, 0.18)" : "rgba(64, 192, 87, 0.14)";
  bar.classList.add("visible");
}

function handleAdminLogin(e) {
  e.preventDefault();
  const input = document.getElementById("admin-password-input");
  const pass = (input?.value || "").trim();
  if (!pass) return;

  if (pass !== ADMIN_PASS) {
    showAdminStatus("Incorrect admin password. Access denied.", true);
    return;
  }

  const savedGhToken = localStorage.getItem("alonecult_gh_token") || "";
  adminSession = {
    authenticated: true,
    token: savedGhToken,
    user: { login: GITHUB_OWNER }
  };
  sessionStorage.setItem("alonecult_admin_unlocked", "true");
  renderCurrentRoute();
}

function handleAdminLogout() {
  adminSession = { authenticated: false, token: "", user: null };
  sessionStorage.removeItem("alonecult_admin_unlocked");
  renderCurrentRoute();
}

function saveAdminDraftAndNotify() {
  saveCurrentFormToMemory();
  localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
  showAdminStatus("✅ Changes saved! Click '👁 preview site' to view or '🚀 publish to live GitHub' to push to alonecult.github.io.");
}

function switchAdminTab(tab) {
  saveCurrentFormToMemory();
  adminActiveTab = tab;
  renderCurrentRoute();
}

function setPreviewDevice(presetKey) {
  if (!DEVICE_PRESETS[presetKey]) return;
  activePreviewDevice = presetKey;
  renderCurrentRoute();
}

function getPreviewIframeSrc(route = activePreviewRoute) {
  return `index.html?preview=${Date.now()}&drag=${visualDragModeEnabled ? "1" : "0"}#${route}`;
}

function setPreviewRoute(route) {
  activePreviewRoute = route;
  const iframe = document.getElementById("admin-device-iframe");
  if (iframe) {
    iframe.src = getPreviewIframeSrc(route);
  }
}

function refreshDeviceIframe() {
  const iframe = document.getElementById("admin-device-iframe");
  if (iframe) {
    iframe.src = getPreviewIframeSrc(activePreviewRoute);
  }
}

let wixAddDrawerOpen = false;
let wixUndoStack = [];
let wixRedoStack = [];

function pushWixHistorySnapshot() {
  const snap = JSON.stringify(SITE_CONTENT);
  if (wixUndoStack.length === 0 || wixUndoStack[wixUndoStack.length - 1] !== snap) {
    wixUndoStack.push(snap);
    if (wixUndoStack.length > 30) wixUndoStack.shift();
    wixRedoStack = [];
  }
}

function handleWixUndo() {
  if (wixUndoStack.length === 0) {
    showAdminStatus("Nothing to undo.");
    return;
  }
  wixRedoStack.push(JSON.stringify(SITE_CONTENT));
  const prev = wixUndoStack.pop();
  SITE_CONTENT = JSON.parse(prev);
  localStorage.setItem("alonecult_custom_content", prev);
  applyGlobalLayoutSettings();
  renderCurrentRoute();
  showAdminStatus("↩ Undid last visual edit!");
}

function handleWixRedo() {
  if (wixRedoStack.length === 0) {
    showAdminStatus("Nothing to redo.");
    return;
  }
  wixUndoStack.push(JSON.stringify(SITE_CONTENT));
  const next = wixRedoStack.pop();
  SITE_CONTENT = JSON.parse(next);
  localStorage.setItem("alonecult_custom_content", next);
  applyGlobalLayoutSettings();
  renderCurrentRoute();
  showAdminStatus("↪ Redid visual edit!");
}

function toggleWixAddDrawer() {
  wixAddDrawerOpen = !wixAddDrawerOpen;
  renderCurrentRoute();
}

function addWixCustomElement(type) {
  pushWixHistorySnapshot();
  const layouts = getLayouts();
  if (!layouts.customElements) layouts.customElements = {};
  const route = activePreviewRoute || "home";
  if (!Array.isArray(layouts.customElements[route])) {
    layouts.customElements[route] = [];
  }
  const id = `wix-el-${Date.now()}`;
  const defaults = {
    heading: { id, type: "heading", text: "new typewriter heading." },
    paragraph: { id, type: "paragraph", text: "Double-click this paragraph in the preview canvas to edit its text directly in place, or drag it anywhere on the page." },
    quote: { id, type: "quote", text: "“A new story begins where the old frame ends.” — iskandar afiq" },
    image: { id, type: "image", src: "https://static.wixstatic.com/media/f30f79_332d8993089e40c9b29f70cf3b544539~mv2.png", caption: "custom photo / sticker" },
    button: { id, type: "button", text: "custom link / download ↗", url: "https://alonecult.github.io" },
    divider: { id, type: "divider", text: "✦ ✦ ✦" }
  };
  layouts.customElements[route].push(defaults[type] || defaults.paragraph);
  wixAddDrawerOpen = false;
  localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
  renderCurrentRoute();
  showAdminStatus(`＋ Added new ${type} block to '${route}'! Click & drag or resize it inside the preview canvas.`);
}

function toggleVisualDragMode() {
  visualDragModeEnabled = !visualDragModeEnabled;
  renderCurrentRoute();
  showAdminStatus(visualDragModeEnabled
    ? "✋ Wix Studio Visual Edit Mode ON! Click any element for the floating inspector bar, drag to move, drag ↘ corner to resize, or double-click text to edit inline."
    : "Visual Edit Mode OFF.");
}

function resetAllDraggedPositions() {
  pushWixHistorySnapshot();
  const layouts = getLayouts();
  layouts.freeformPositions = {};
  layouts.elementStyles = {};
  localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
  refreshDeviceIframe();
  showAdminStatus("↺ Reset all freeform dragged positions, scales, and custom element overrides!");
}

function swapHeroPhotos() {
  const tmp = SITE_CONTENT.home.heroPhotoMain;
  SITE_CONTENT.home.heroPhotoMain = SITE_CONTENT.home.heroPhotoSecondary;
  SITE_CONTENT.home.heroPhotoSecondary = tmp;
  localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
  renderCurrentRoute();
  showAdminStatus("⇄ Swapped Hero Staircase Photo 1 & Photo 2!");
}

let dndSourceType = null;
let dndSourceIndex = null;

function handleDndStart(e, listType, idx) {
  dndSourceType = listType;
  dndSourceIndex = idx;
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${listType}:${idx}`);
  }
  e.currentTarget.classList.add("dragging");
}

function handleDndOver(e) {
  e.preventDefault();
  if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
  e.currentTarget.classList.add("drag-over");
}

function handleDndLeave(e) {
  e.currentTarget.classList.remove("drag-over");
}

function handleDndEnd(e) {
  e.currentTarget.classList.remove("dragging");
  document.querySelectorAll(".drag-over").forEach(el => el.classList.remove("drag-over"));
}

function handleDndDrop(e, listType, targetIdx) {
  e.preventDefault();
  e.currentTarget.classList.remove("drag-over");
  if (dndSourceType !== listType || dndSourceIndex === null || dndSourceIndex === targetIdx) return;

  if (listType === "homeSections") {
    const lay = getLayouts().home;
    const arr = [...(lay.sectionOrder || ["hero", "intro", "about", "quote", "directory"])];
    const [moved] = arr.splice(dndSourceIndex, 1);
    arr.splice(targetIdx, 0, moved);
    lay.sectionOrder = arr;
  } else if (listType === "diplomaScripts") {
    const arr = SITE_CONTENT.scripts.diploma;
    const [moved] = arr.splice(dndSourceIndex, 1);
    arr.splice(targetIdx, 0, moved);
  } else if (listType === "degreeScripts") {
    const arr = SITE_CONTENT.scripts.degree;
    const [moved] = arr.splice(dndSourceIndex, 1);
    arr.splice(targetIdx, 0, moved);
  } else if (listType === "audioReviews") {
    const arr = SITE_CONTENT.audioDevices;
    const [moved] = arr.splice(dndSourceIndex, 1);
    arr.splice(targetIdx, 0, moved);
  } else if (listType === "phoneReviews") {
    const arr = SITE_CONTENT.phones;
    const [moved] = arr.splice(dndSourceIndex, 1);
    arr.splice(targetIdx, 0, moved);
  }

  dndSourceType = null;
  dndSourceIndex = null;
  localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
  renderCurrentRoute();
  showAdminStatus("Rearranged items via drag-and-drop! Live preview updated.");
}

function updateLayoutField(pageKey, fieldKey, value) {
  const layouts = getLayouts();
  layouts[pageKey][fieldKey] = value;
  localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
  applyGlobalLayoutSettings();
  refreshDeviceIframe();
  showAdminStatus(`Updated ${pageKey} layout (${fieldKey})! Live device preview refreshed.`);
}

function moveHomeSection(idx, dir) {
  const lay = getLayouts().home;
  const arr = [...(lay.sectionOrder || ["hero", "intro", "about", "quote", "directory"])];
  const targetIdx = idx + dir;
  if (targetIdx < 0 || targetIdx >= arr.length) return;
  const temp = arr[idx];
  arr[idx] = arr[targetIdx];
  arr[targetIdx] = temp;
  lay.sectionOrder = arr;
  localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
  renderCurrentRoute();
  showAdminStatus("Reordered Home page sections!");
}

function toggleHomeSectionVisibility(sectionKey, isVisible) {
  const lay = getLayouts().home;
  const hidden = new Set(lay.hiddenSections || []);
  if (isVisible) {
    hidden.delete(sectionKey);
  } else {
    hidden.add(sectionKey);
  }
  lay.hiddenSections = Array.from(hidden);
  localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
  refreshDeviceIframe();
  showAdminStatus(`Home section '${sectionKey}' ${isVisible ? "shown" : "hidden"}!`);
}

function resetAllLayouts() {
  SITE_CONTENT.layouts = JSON.parse(JSON.stringify(DEFAULT_LAYOUTS));
  localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
  applyGlobalLayoutSettings();
  renderCurrentRoute();
  showAdminStatus("↺ Reset all page layouts to original defaults!");
}

function renderAdminTabContent() {
  if (adminActiveTab === "layouts") {
    const L = getLayouts();
    const dev = DEVICE_PRESETS[activePreviewDevice] || DEVICE_PRESETS.pc;
    const hiddenSet = new Set(L.home.hiddenSections || []);
    const sectionLabels = {
      hero: "1. Hero Photos & Scroll Prompt",
      intro: "2. Intro Statement ('iskandar afiq is him.')",
      about: "3. About Him Bio & Portrait",
      quote: "4. Quote Banner",
      directory: "5. Explore the Archive Directory"
    };

    return `
      <!-- MULTI-DEVICE LIVE PREVIEWER -->
      <div class="device-preview-shell">
        <div class="device-toolbar">
          <div>
            <strong style="font-family: var(--font-typewriter); font-size: 1.2rem; color: #fff;">live multi-device previewer &amp; visual drag canvas<span class="red-dot">.</span></strong>
            <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">
              Drag images &amp; blocks directly inside the preview below, or drag rows in the cards to rearrange!
            </div>
          </div>

          <div class="device-btn-group">
            ${Object.entries(DEVICE_PRESETS).map(([k, preset]) => `
              <button
                type="button"
                class="device-preset-btn ${activePreviewDevice === k ? 'active' : ''}"
                onclick="setPreviewDevice('${k}')"
              >${preset.label}</button>
            `).join("")}
          </div>

          <div style="display: flex; align-items: center; gap: 0.45rem; flex-wrap: wrap;">
            <button
              type="button"
              class="admin-btn"
              style="padding: 0.4rem 0.75rem; border-color: #3b82f6; color: #60a5fa;"
              onclick="toggleWixAddDrawer()"
            >
              ＋ add element
            </button>
            <button
              type="button"
              class="admin-btn ${visualDragModeEnabled ? 'admin-btn-primary' : ''}"
              style="padding: 0.4rem 0.75rem;"
              onclick="toggleVisualDragMode()"
            >
              ✋ wix visual editor: ${visualDragModeEnabled ? 'ON' : 'OFF'}
            </button>
            <button
              type="button"
              class="admin-btn"
              style="padding: 0.4rem 0.6rem;"
              onclick="handleWixUndo()"
              title="Undo last visual change"
            >
              ↩ undo
            </button>
            <button
              type="button"
              class="admin-btn"
              style="padding: 0.4rem 0.6rem;"
              onclick="handleWixRedo()"
              title="Redo visual change"
            >
              ↪ redo
            </button>
            <button
              type="button"
              class="admin-btn"
              style="padding: 0.4rem 0.65rem;"
              onclick="resetAllDraggedPositions()"
              title="Reset all dragged image positions & scales"
            >
              ↺ reset positions
            </button>
            <label style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--red);">Page:</label>
            <select class="admin-input" style="width: auto; padding: 0.4rem 0.65rem;" onchange="setPreviewRoute(this.value)">
              <option value="home" ${activePreviewRoute === 'home' ? 'selected' : ''}>Home (/)</option>
              <option value="my-scripts" ${activePreviewRoute === 'my-scripts' ? 'selected' : ''}>Works: My Scripts Sample</option>
              <option value="anna" ${activePreviewRoute === 'anna' ? 'selected' : ''}>Works: Anna (Short Story)</option>
              <option value="sinister-roots-zine" ${activePreviewRoute === 'sinister-roots-zine' ? 'selected' : ''}>Works: Sinister Roots Zine</option>
              <option value="audio-devices" ${activePreviewRoute === 'audio-devices' ? 'selected' : ''}>Tech Reviews: Audio Devices</option>
              <option value="phones" ${activePreviewRoute === 'phones' ? 'selected' : ''}>Tech Reviews: Phones</option>
              <option value="first-unofficial-voice-acting-experience" ${activePreviewRoute === 'first-unofficial-voice-acting-experience' ? 'selected' : ''}>Experiences: Voice-Acting</option>
              <option value="wonders-of-cyberdecks" ${activePreviewRoute === 'wonders-of-cyberdecks' ? 'selected' : ''}>Fantasizing Tech: Cyberdecks</option>
              <option value="music-burnout" ${activePreviewRoute === 'music-burnout' ? 'selected' : ''}>Shoughrts: Music Burnout</option>
            </select>
            <button type="button" class="admin-btn" style="padding: 0.4rem 0.65rem;" onclick="refreshDeviceIframe()" title="Refresh Preview">↻</button>
          </div>
        </div>

        <!-- WIX + ADD ELEMENTS DRAWER -->
        <div class="wix-add-drawer ${wixAddDrawerOpen ? 'open' : ''}">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <strong style="font-family:var(--font-mono); font-size:0.88rem; color:#60a5fa;">＋ Add New Wix Element to Page (${escapeHtml(activePreviewRoute)})</strong>
            <button type="button" class="mini-icon-btn" onclick="toggleWixAddDrawer()">✕ close</button>
          </div>
          <div class="wix-add-grid">
            <button type="button" class="wix-add-item-btn" onclick="addWixCustomElement('heading')">
              <strong>𝗧 Typewriter Heading</strong>
              <span>Add a custom title block</span>
            </button>
            <button type="button" class="wix-add-item-btn" onclick="addWixCustomElement('paragraph')">
              <strong>¶ Text Paragraph</strong>
              <span>Add an editable story/note block</span>
            </button>
            <button type="button" class="wix-add-item-btn" onclick="addWixCustomElement('quote')">
              <strong>❝ Pull Quote Box</strong>
              <span>Add a highlighted quote banner</span>
            </button>
            <button type="button" class="wix-add-item-btn" onclick="addWixCustomElement('image')">
              <strong>🖼 Image / Sticker</strong>
              <span>Add a draggable photo or badge</span>
            </button>
            <button type="button" class="wix-add-item-btn" onclick="addWixCustomElement('button')">
              <strong>⬇ Action / PDF Button</strong>
              <span>Add a clickable link or download</span>
            </button>
            <button type="button" class="wix-add-item-btn" onclick="addWixCustomElement('divider')">
              <strong>― Retro Divider</strong>
              <span>Add a decorative section break</span>
            </button>
          </div>
        </div>

        <div class="device-stage-wrap">
          <div
            class="device-bezel ${activePreviewDevice === 'pc' ? 'bezel-pc' : ''} ${dev.isPkb ? 'bezel-pkb' : ''}"
            style="width: ${dev.width}; max-width: ${dev.maxW}; height: ${dev.height};"
          >
            <iframe
              id="admin-device-iframe"
              class="device-iframe"
              src="${getPreviewIframeSrc(activePreviewRoute)}"
              title="Multi-Device Responsive Preview"
            ></iframe>
            ${dev.isPkb ? `
              <div class="pkb-hardware-chin" aria-hidden="true">
                <div class="pkb-key-row">
                  <span class="pkb-key">Q</span><span class="pkb-key">W</span><span class="pkb-key">E</span><span class="pkb-key">R</span><span class="pkb-key">T</span><span class="pkb-key">Y</span><span class="pkb-key">U</span><span class="pkb-key">I</span><span class="pkb-key">O</span><span class="pkb-key">P</span>
                </div>
                <div class="pkb-key-row">
                  <span class="pkb-key">A</span><span class="pkb-key">S</span><span class="pkb-key">D</span><span class="pkb-key">F</span><span class="pkb-key">G</span><span class="pkb-key">H</span><span class="pkb-key">J</span><span class="pkb-key">K</span><span class="pkb-key">L</span><span class="pkb-key">↵</span>
                </div>
                <div class="pkb-key-row">
                  <span class="pkb-key">⇧</span><span class="pkb-key">Z</span><span class="pkb-key">X</span><span class="pkb-key">C</span><span class="pkb-key">SPACE</span><span class="pkb-key">V</span><span class="pkb-key">B</span><span class="pkb-key">N</span><span class="pkb-key">M</span><span class="pkb-key">⌫</span>
                </div>
              </div>
            ` : ""}
          </div>
          <div class="device-dimensions-label">
            Active Simulation: <strong>${dev.label}</strong> — ${dev.dims} · <strong>Tip:</strong> Grab &amp; drag any outlined photo or block inside the screen above!
          </div>
        </div>
      </div>

      <!-- PER-PAGE LAYOUT EDITOR CARDS -->
      <div class="admin-panel-card">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem; border-bottom: 1px dashed var(--border); padding-bottom: 0.75rem;">
          <h3 style="margin:0; border:none; padding:0;">📐 page layout &amp; drag-and-drop rearranger (all pages)</h3>
          <button type="button" class="admin-btn admin-btn-danger" onclick="resetAllLayouts()">↺ reset all layouts to default</button>
        </div>

        <div class="layout-editor-grid">
          <!-- 0. GLOBAL SITE THEME & HEADER -->
          <div class="layout-page-card">
            <h4>
              <span>🌐 global theme &amp; header</span>
            </h4>
            <div class="admin-field" style="margin:0;">
              <label>Header Navigation Style</label>
              <select class="admin-input" onchange="updateLayoutField('global', 'headerStyle', this.value)">
                <option value="split" ${L.global.headerStyle === 'split' ? 'selected' : ''}>Split (Logo Left + Nav Right)</option>
                <option value="centered" ${L.global.headerStyle === 'centered' ? 'selected' : ''}>Centered Stack (Logo Top + Nav Center)</option>
                <option value="compact" ${L.global.headerStyle === 'compact' ? 'selected' : ''}>Compact Minimal Bar (PKB Friendly)</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Typography Mode</label>
              <select class="admin-input" onchange="updateLayoutField('global', 'fontMode', this.value)">
                <option value="typewriter" ${L.global.fontMode === 'typewriter' ? 'selected' : ''}>Signature Typewriter + Serif</option>
                <option value="mono" ${L.global.fontMode === 'mono' ? 'selected' : ''}>Full Courier Terminal Mono</option>
                <option value="editorial" ${L.global.fontMode === 'editorial' ? 'selected' : ''}>Classic Literary Serif</option>
                <option value="modern" ${L.global.fontMode === 'modern' ? 'selected' : ''}>Clean Modern Sans</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Primary Accent Color</label>
              <div style="display: flex; gap: 0.5rem; align-items: center;">
                <input type="color" value="${escapeHtml(L.global.accentColor || '#df2929')}" style="width: 44px; height: 38px; background: none; border: 1px solid var(--border); cursor: pointer;" onchange="updateLayoutField('global', 'accentColor', this.value)" />
                <select class="admin-input" onchange="updateLayoutField('global', 'accentColor', this.value)">
                  <option value="#df2929" ${L.global.accentColor === '#df2929' ? 'selected' : ''}>Crimson Red (#df2929)</option>
                  <option value="#ff6b35" ${L.global.accentColor === '#ff6b35' ? 'selected' : ''}>Cyber Orange (#ff6b35)</option>
                  <option value="#74c0fc" ${L.global.accentColor === '#74c0fc' ? 'selected' : ''}>Retro Blue (#74c0fc)</option>
                  <option value="#a9e34b" ${L.global.accentColor === '#a9e34b' ? 'selected' : ''}>Terminal Green (#a9e34b)</option>
                  <option value="#f59f00" ${L.global.accentColor === '#f59f00' ? 'selected' : ''}>Amber Gold (#f59f00)</option>
                </select>
              </div>
            </div>
            <label style="font-family: var(--font-mono); font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" ${L.global.showFilmGrain !== false ? 'checked' : ''} onchange="updateLayoutField('global', 'showFilmGrain', this.checked)" />
              Show subtle retro film grain overlay
            </label>
          </div>

          <!-- 1. HOME PAGE LAYOUT -->
          <div class="layout-page-card">
            <h4>
              <span>1. home page</span>
              <button type="button" class="mini-icon-btn" onclick="setPreviewRoute('home')">preview 👁</button>
            </h4>
            <div class="admin-field" style="margin:0;">
              <label>Page Width</label>
              <select class="admin-input" onchange="updateLayoutField('home', 'containerWidth', this.value)">
                <option value="narrow" ${L.home.containerWidth === 'narrow' ? 'selected' : ''}>Narrow (720px)</option>
                <option value="standard" ${L.home.containerWidth === 'standard' ? 'selected' : ''}>Standard (980px)</option>
                <option value="wide" ${L.home.containerWidth === 'wide' ? 'selected' : ''}>Wide (1220px)</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Hero Collage Layout &amp; Photo Swap</label>
              <div style="display:flex; gap:0.5rem; align-items:center;">
                <select class="admin-input" onchange="updateLayoutField('home', 'heroLayout', this.value)">
                  <option value="collage" ${L.home.heroLayout === 'collage' ? 'selected' : ''}>2-Column Collage (Default)</option>
                  <option value="stacked-center" ${L.home.heroLayout === 'stacked-center' ? 'selected' : ''}>Centered Single Column</option>
                  <option value="reversed" ${L.home.heroLayout === 'reversed' ? 'selected' : ''}>Reversed 2-Column</option>
                </select>
                <button type="button" class="mini-icon-btn" style="padding:0.55rem 0.65rem; white-space:nowrap;" onclick="swapHeroPhotos()" title="Swap Hero Photo 1 & Photo 2">⇄ swap photos</button>
              </div>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>About Him Section Layout</label>
              <select class="admin-input" onchange="updateLayoutField('home', 'aboutLayout', this.value)">
                <option value="text-left" ${L.home.aboutLayout === 'text-left' ? 'selected' : ''}>Bio Text Left + Portrait Right</option>
                <option value="photo-left" ${L.home.aboutLayout === 'photo-left' ? 'selected' : ''}>Portrait Left + Bio Text Right</option>
                <option value="stacked" ${L.home.aboutLayout === 'stacked' ? 'selected' : ''}>Full-Width Stacked</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Archive Directory Grid Columns</label>
              <select class="admin-input" onchange="updateLayoutField('home', 'directoryColumns', this.value)">
                <option value="3" ${L.home.directoryColumns === '3' ? 'selected' : ''}>3 Columns</option>
                <option value="2" ${L.home.directoryColumns === '2' ? 'selected' : ''}>2 Columns</option>
                <option value="1" ${L.home.directoryColumns === '1' ? 'selected' : ''}>1 Column List</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Drag to Rearrange Sections (or use ⬆/⬇)</label>
              <div class="dnd-sortable-list">
                ${(L.home.sectionOrder || ["hero", "intro", "about", "quote", "directory"]).map((secKey, idx, arr) => `
                  <div
                    class="dnd-sortable-item"
                    draggable="true"
                    ondragstart="handleDndStart(event, 'homeSections', ${idx})"
                    ondragover="handleDndOver(event)"
                    ondragleave="handleDndLeave(event)"
                    ondragend="handleDndEnd(event)"
                    ondrop="handleDndDrop(event, 'homeSections', ${idx})"
                  >
                    <label style="display:flex; align-items:center; gap:0.45rem; margin:0; color: var(--text); cursor:grab;">
                      <span class="dnd-grip">⋮⋮</span>
                      <input type="checkbox" ${!hiddenSet.has(secKey) ? 'checked' : ''} onchange="toggleHomeSectionVisibility('${secKey}', this.checked)" />
                      <span>${sectionLabels[secKey] || secKey}</span>
                    </label>
                    <div class="section-order-controls">
                      <button type="button" class="mini-icon-btn" ${idx === 0 ? 'disabled' : ''} onclick="moveHomeSection(${idx}, -1)">⬆</button>
                      <button type="button" class="mini-icon-btn" ${idx === arr.length - 1 ? 'disabled' : ''} onclick="moveHomeSection(${idx}, 1)">⬇</button>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- 2. MY SCRIPTS SAMPLE LAYOUT -->
          <div class="layout-page-card">
            <h4>
              <span>2. my scripts sample</span>
              <button type="button" class="mini-icon-btn" onclick="setPreviewRoute('my-scripts')">preview 👁</button>
            </h4>
            <div class="admin-field" style="margin:0;">
              <label>Page Width</label>
              <select class="admin-input" onchange="updateLayoutField('scripts', 'containerWidth', this.value)">
                <option value="narrow" ${L.scripts.containerWidth === 'narrow' ? 'selected' : ''}>Narrow (720px)</option>
                <option value="standard" ${L.scripts.containerWidth === 'standard' ? 'selected' : ''}>Standard (980px)</option>
                <option value="wide" ${L.scripts.containerWidth === 'wide' ? 'selected' : ''}>Wide (1220px)</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Scripts Display Mode</label>
              <select class="admin-input" onchange="updateLayoutField('scripts', 'viewMode', this.value)">
                <option value="list" ${L.scripts.viewMode === 'list' ? 'selected' : ''}>Single-Column Rows (Default)</option>
                <option value="grid-2" ${L.scripts.viewMode === 'grid-2' ? 'selected' : ''}>2-Column Grid Cards</option>
                <option value="grid-3" ${L.scripts.viewMode === 'grid-3' ? 'selected' : ''}>3-Column Compact Cards</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Category Order</label>
              <select class="admin-input" onchange="updateLayoutField('scripts', 'groupOrder', this.value)">
                <option value="diploma-first" ${L.scripts.groupOrder === 'diploma-first' ? 'selected' : ''}>Diploma First → Degree Second</option>
                <option value="degree-first" ${L.scripts.groupOrder === 'degree-first' ? 'selected' : ''}>Degree First → Diploma Second</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Drag to Reorder Degree Scripts</label>
              <div class="dnd-sortable-list">
                ${(SITE_CONTENT.scripts.degree || []).map((item, idx) => `
                  <div
                    class="dnd-sortable-item"
                    draggable="true"
                    ondragstart="handleDndStart(event, 'degreeScripts', ${idx})"
                    ondragover="handleDndOver(event)"
                    ondragleave="handleDndLeave(event)"
                    ondragend="handleDndEnd(event)"
                    ondrop="handleDndDrop(event, 'degreeScripts', ${idx})"
                  >
                    <span><span class="dnd-grip">⋮⋮</span> ${escapeHtml(item.title)}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- 3. ANNA SHORT STORY LAYOUT -->
          <div class="layout-page-card">
            <h4>
              <span>3. anna. (short story)</span>
              <button type="button" class="mini-icon-btn" onclick="setPreviewRoute('anna')">preview 👁</button>
            </h4>
            <div class="admin-field" style="margin:0;">
              <label>Reading Column Width</label>
              <select class="admin-input" onchange="updateLayoutField('anna', 'readingWidth', this.value)">
                <option value="narrow" ${L.anna.readingWidth === 'narrow' ? 'selected' : ''}>Book Page Narrow (620px)</option>
                <option value="standard" ${L.anna.readingWidth === 'standard' ? 'selected' : ''}>Editorial Standard (760px)</option>
                <option value="wide" ${L.anna.readingWidth === 'wide' ? 'selected' : ''}>Wide (980px)</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Story Font Size</label>
              <select class="admin-input" onchange="updateLayoutField('anna', 'fontSize', this.value)">
                <option value="small" ${L.anna.fontSize === 'small' ? 'selected' : ''}>Compact (1.02rem)</option>
                <option value="medium" ${L.anna.fontSize === 'medium' ? 'selected' : ''}>Standard (1.18rem)</option>
                <option value="large" ${L.anna.fontSize === 'large' ? 'selected' : ''}>Large Comfort (1.34rem)</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Paragraph Alignment</label>
              <select class="admin-input" onchange="updateLayoutField('anna', 'textAlign', this.value)">
                <option value="left" ${L.anna.textAlign === 'left' ? 'selected' : ''}>Left-Aligned</option>
                <option value="justify" ${L.anna.textAlign === 'justify' ? 'selected' : ''}>Book Justified</option>
              </select>
            </div>
            <label style="font-family: var(--font-mono); font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" ${L.anna.dropCap ? 'checked' : ''} onchange="updateLayoutField('anna', 'dropCap', this.checked)" />
              Enable literary Drop-Cap on opening paragraph
            </label>
          </div>

          <!-- 4. SINISTER ROOTS ZINE LAYOUT -->
          <div class="layout-page-card">
            <h4>
              <span>4. sinister roots (zine)</span>
              <button type="button" class="mini-icon-btn" onclick="setPreviewRoute('sinister-roots-zine')">preview 👁</button>
            </h4>
            <div class="admin-field" style="margin:0;">
              <label>Header Banner Theme</label>
              <select class="admin-input" onchange="updateLayoutField('sinisterRoots', 'bannerTheme', this.value)">
                <option value="olive" ${L.sinisterRoots.bannerTheme === 'olive' ? 'selected' : ''}>Sinister Olive Gradient (Original)</option>
                <option value="crimson" ${L.sinisterRoots.bannerTheme === 'crimson' ? 'selected' : ''}>Dark Blood Crimson</option>
                <option value="monochrome" ${L.sinisterRoots.bannerTheme === 'monochrome' ? 'selected' : ''}>Noir Monochrome</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Cover &amp; Download Showcase Layout</label>
              <select class="admin-input" onchange="updateLayoutField('sinisterRoots', 'showcaseLayout', this.value)">
                <option value="cover-left" ${L.sinisterRoots.showcaseLayout === 'cover-left' ? 'selected' : ''}>Cover Left + Details Right</option>
                <option value="cover-right" ${L.sinisterRoots.showcaseLayout === 'cover-right' ? 'selected' : ''}>Details Left + Cover Right</option>
                <option value="centered" ${L.sinisterRoots.showcaseLayout === 'centered' ? 'selected' : ''}>Centered Vertical Stack</option>
              </select>
            </div>
          </div>

          <!-- 5. AUDIO DEVICES REVIEWS LAYOUT -->
          <div class="layout-page-card">
            <h4>
              <span>5. audio devices</span>
              <button type="button" class="mini-icon-btn" onclick="setPreviewRoute('audio-devices')">preview 👁</button>
            </h4>
            <div class="admin-field" style="margin:0;">
              <label>Reviews Grid Columns</label>
              <select class="admin-input" onchange="updateLayoutField('audioDevices', 'columns', this.value)">
                <option value="1" ${L.audioDevices.columns === '1' ? 'selected' : ''}>1 Column Detailed Stack (Default)</option>
                <option value="2" ${L.audioDevices.columns === '2' ? 'selected' : ''}>2-Column Review Cards Grid</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Photo Placement inside Cards</label>
              <select class="admin-input" onchange="updateLayoutField('audioDevices', 'cardStyle', this.value)">
                <option value="alternating" ${L.audioDevices.cardStyle === 'alternating' ? 'selected' : ''}>Alternating Left / Right (Original)</option>
                <option value="image-left" ${L.audioDevices.cardStyle === 'image-left' ? 'selected' : ''}>All Photos on Left</option>
                <option value="image-right" ${L.audioDevices.cardStyle === 'image-right' ? 'selected' : ''}>All Photos on Right</option>
                <option value="stacked" ${L.audioDevices.cardStyle === 'stacked' ? 'selected' : ''}>Top Photo + Text Below</option>
              </select>
            </div>
            <label style="font-family: var(--font-mono); font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" ${L.audioDevices.showBadges !== false ? 'checked' : ''} onchange="updateLayoutField('audioDevices', 'showBadges', this.checked)" />
              Show overall score badges
            </label>
            <label style="font-family: var(--font-mono); font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" ${L.audioDevices.showTldr !== false ? 'checked' : ''} onchange="updateLayoutField('audioDevices', 'showTldr', this.checked)" />
              Show Quality/Performance TL;DR callout boxes
            </label>
            <div class="admin-field" style="margin:0;">
              <label>Drag to Rearrange Audio Reviews &amp; Photos</label>
              <div class="dnd-sortable-list">
                ${(SITE_CONTENT.audioDevices || []).map((item, idx) => `
                  <div
                    class="dnd-sortable-item"
                    draggable="true"
                    ondragstart="handleDndStart(event, 'audioReviews', ${idx})"
                    ondragover="handleDndOver(event)"
                    ondragleave="handleDndLeave(event)"
                    ondragend="handleDndEnd(event)"
                    ondrop="handleDndDrop(event, 'audioReviews', ${idx})"
                  >
                    <span style="display:flex; align-items:center; gap:0.5rem;">
                      <span class="dnd-grip">⋮⋮</span>
                      ${item.image ? `<img class="dnd-thumb" src="${escapeHtml(item.image)}" alt="" />` : ""}
                      <span>${escapeHtml(item.title)}</span>
                    </span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- 6. PHONES REVIEWS LAYOUT -->
          <div class="layout-page-card">
            <h4>
              <span>6. phones reviews</span>
              <button type="button" class="mini-icon-btn" onclick="setPreviewRoute('phones')">preview 👁</button>
            </h4>
            <div class="admin-field" style="margin:0;">
              <label>Card Layout</label>
              <select class="admin-input" onchange="updateLayoutField('phones', 'cardStyle', this.value)">
                <option value="image-right" ${L.phones.cardStyle === 'image-right' ? 'selected' : ''}>Review Left + Phone Photo Right</option>
                <option value="image-left" ${L.phones.cardStyle === 'image-left' ? 'selected' : ''}>Phone Photo Left + Review Right</option>
                <option value="stacked" ${L.phones.cardStyle === 'stacked' ? 'selected' : ''}>Stacked Top-to-Bottom</option>
              </select>
            </div>
            <label style="font-family: var(--font-mono); font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" ${L.phones.showBadges !== false ? 'checked' : ''} onchange="updateLayoutField('phones', 'showBadges', this.checked)" />
              Show overall score badges
            </label>
          </div>

          <!-- 7. VOICE-ACTING EXPERIENCE LAYOUT -->
          <div class="layout-page-card">
            <h4>
              <span>7. voice-acting</span>
              <button type="button" class="mini-icon-btn" onclick="setPreviewRoute('first-unofficial-voice-acting-experience')">preview 👁</button>
            </h4>
            <div class="admin-field" style="margin:0;">
              <label>Reading Width</label>
              <select class="admin-input" onchange="updateLayoutField('voiceActing', 'readingWidth', this.value)">
                <option value="narrow" ${L.voiceActing.readingWidth === 'narrow' ? 'selected' : ''}>Narrow (620px)</option>
                <option value="standard" ${L.voiceActing.readingWidth === 'standard' ? 'selected' : ''}>Standard (760px)</option>
                <option value="wide" ${L.voiceActing.readingWidth === 'wide' ? 'selected' : ''}>Wide (980px)</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Font Size</label>
              <select class="admin-input" onchange="updateLayoutField('voiceActing', 'fontSize', this.value)">
                <option value="small" ${L.voiceActing.fontSize === 'small' ? 'selected' : ''}>Compact</option>
                <option value="medium" ${L.voiceActing.fontSize === 'medium' ? 'selected' : ''}>Standard</option>
                <option value="large" ${L.voiceActing.fontSize === 'large' ? 'selected' : ''}>Large</option>
              </select>
            </div>
          </div>

          <!-- 8. WONDERS OF CYBERDECKS LAYOUT -->
          <div class="layout-page-card">
            <h4>
              <span>8. cyberdecks</span>
              <button type="button" class="mini-icon-btn" onclick="setPreviewRoute('wonders-of-cyberdecks')">preview 👁</button>
            </h4>
            <div class="admin-field" style="margin:0;">
              <label>Reading Width</label>
              <select class="admin-input" onchange="updateLayoutField('cyberdecks', 'readingWidth', this.value)">
                <option value="narrow" ${L.cyberdecks.readingWidth === 'narrow' ? 'selected' : ''}>Narrow (620px)</option>
                <option value="standard" ${L.cyberdecks.readingWidth === 'standard' ? 'selected' : ''}>Standard (760px)</option>
                <option value="wide" ${L.cyberdecks.readingWidth === 'wide' ? 'selected' : ''}>Wide (980px)</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Headline Accent Color</label>
              <select class="admin-input" onchange="updateLayoutField('cyberdecks', 'headingColor', this.value)">
                <option value="cyber-blue" ${L.cyberdecks.headingColor === 'cyber-blue' ? 'selected' : ''}>Cyber Blue (#9ec5fe)</option>
                <option value="red" ${L.cyberdecks.headingColor === 'red' ? 'selected' : ''}>Crimson Red</option>
                <option value="white" ${L.cyberdecks.headingColor === 'white' ? 'selected' : ''}>Crisp White</option>
              </select>
            </div>
          </div>

          <!-- 9. MUSIC BURNOUT LAYOUT -->
          <div class="layout-page-card">
            <h4>
              <span>9. music burnout</span>
              <button type="button" class="mini-icon-btn" onclick="setPreviewRoute('music-burnout')">preview 👁</button>
            </h4>
            <div class="admin-field" style="margin:0;">
              <label>Reading Width</label>
              <select class="admin-input" onchange="updateLayoutField('musicBurnout', 'readingWidth', this.value)">
                <option value="narrow" ${L.musicBurnout.readingWidth === 'narrow' ? 'selected' : ''}>Narrow (620px)</option>
                <option value="standard" ${L.musicBurnout.readingWidth === 'standard' ? 'selected' : ''}>Standard (760px)</option>
                <option value="wide" ${L.musicBurnout.readingWidth === 'wide' ? 'selected' : ''}>Wide (980px)</option>
              </select>
            </div>
            <div class="admin-field" style="margin:0;">
              <label>Illustration Placement</label>
              <select class="admin-input" onchange="updateLayoutField('musicBurnout', 'imagePosition', this.value)">
                <option value="bottom" ${L.musicBurnout.imagePosition === 'bottom' ? 'selected' : ''}>Bottom of Essay (Original)</option>
                <option value="top" ${L.musicBurnout.imagePosition === 'top' ? 'selected' : ''}>Top Below Headline</option>
                <option value="hidden" ${L.musicBurnout.imagePosition === 'hidden' ? 'selected' : ''}>Hidden</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  if (adminActiveTab === "home") {
    const h = SITE_CONTENT.home;
    return `
      <div class="admin-panel-card">
        <h3>home &amp; biography</h3>
        <div class="admin-field">
          <label>Main Headline</label>
          <input class="admin-input" id="edit-home-headline" value="${escapeHtml(h.headline)}" onchange="saveCurrentFormToMemory()" />
        </div>
        <div class="admin-field">
          <label>Subheadline</label>
          <input class="admin-input" id="edit-home-subheadline" value="${escapeHtml(h.subheadline)}" onchange="saveCurrentFormToMemory()" />
        </div>
        <div class="admin-field">
          <label>About Him Paragraphs (separate paragraphs with a blank line)</label>
          <textarea class="admin-textarea" id="edit-home-about" style="min-height: 180px;" onchange="saveCurrentFormToMemory()">${escapeHtml((h.aboutParagraphs || []).join("\n\n"))}</textarea>
        </div>
        <div class="admin-field">
          <label>Featured Quote</label>
          <input class="admin-input" id="edit-home-quote" value="${escapeHtml(h.quote)}" onchange="saveCurrentFormToMemory()" />
        </div>
        <div class="admin-field">
          <label>Hero Main Photo URL (or upload new image to repo)</label>
          <div class="admin-upload-row">
            <input class="admin-input" id="edit-home-photo1" value="${escapeHtml(h.heroPhotoMain)}" onchange="saveCurrentFormToMemory()" />
            <label class="admin-btn" style="margin:0;">
              📤 upload image
              <input type="file" accept="image/*" style="display:none;" onchange="uploadAssetToRepo(this, 'edit-home-photo1')" />
            </label>
          </div>
        </div>
        <div class="admin-field">
          <label>Hero Secondary Photo URL</label>
          <div class="admin-upload-row">
            <input class="admin-input" id="edit-home-photo2" value="${escapeHtml(h.heroPhotoSecondary)}" onchange="saveCurrentFormToMemory()" />
            <label class="admin-btn" style="margin:0;">
              📤 upload image
              <input type="file" accept="image/*" style="display:none;" onchange="uploadAssetToRepo(this, 'edit-home-photo2')" />
            </label>
          </div>
        </div>
        <div class="admin-field">
          <label>About Section Portrait Photo URL</label>
          <div class="admin-upload-row">
            <input class="admin-input" id="edit-home-aboutphoto" value="${escapeHtml(h.aboutPhoto)}" onchange="saveCurrentFormToMemory()" />
            <label class="admin-btn" style="margin:0;">
              📤 upload image
              <input type="file" accept="image/*" style="display:none;" onchange="uploadAssetToRepo(this, 'edit-home-aboutphoto')" />
            </label>
          </div>
        </div>
        <div class="admin-field">
          <label>Contact Email</label>
          <input class="admin-input" id="edit-home-email" value="${escapeHtml(h.email)}" onchange="saveCurrentFormToMemory()" />
        </div>
        <div class="admin-field">
          <label>Instagram Handle &amp; URL</label>
          <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 0.75rem;">
            <input class="admin-input" id="edit-home-ig-handle" value="${escapeHtml(h.instagramHandle)}" onchange="saveCurrentFormToMemory()" />
            <input class="admin-input" id="edit-home-ig-url" value="${escapeHtml(h.instagramUrl)}" onchange="saveCurrentFormToMemory()" />
          </div>
        </div>
      </div>
    `;
  }

  if (adminActiveTab === "scripts") {
    const s = SITE_CONTENT.scripts;
    const sr = SITE_CONTENT.sinisterRoots;
    return `
      <div class="admin-panel-card">
        <h3>my scripts sample (diploma &amp; degree)</h3>
        <div class="admin-field">
          <label>Intro Text</label>
          <textarea class="admin-textarea" id="edit-scripts-intro" style="min-height: 70px;" onchange="saveCurrentFormToMemory()">${escapeHtml(s.intro)}</textarea>
        </div>

        <h4 class="typewriter-title" style="font-size: 1.15rem; color: var(--red); margin: 1.25rem 0 0.75rem;">Diploma Scripts</h4>
        ${(s.diploma || []).map((item, idx) => `
          <div class="admin-repeater-item">
            <div class="admin-repeater-header">
              <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">Diploma Script #${idx + 1}</span>
              <button type="button" class="admin-btn admin-btn-danger" onclick="removeScriptItem('diploma', ${idx})">remove</button>
            </div>
            <div class="admin-field">
              <label>Title</label>
              <input class="admin-input" id="diploma-title-${idx}" value="${escapeHtml(item.title)}" onchange="saveCurrentFormToMemory()" />
            </div>
            <div class="admin-field" style="margin-bottom:0;">
              <label>PDF URL (or upload PDF file to GitHub repo)</label>
              <div class="admin-upload-row">
                <input class="admin-input" id="diploma-url-${idx}" value="${escapeHtml(item.url)}" onchange="saveCurrentFormToMemory()" />
                <label class="admin-btn" style="margin:0;">
                  📤 upload PDF
                  <input type="file" accept=".pdf,application/pdf" style="display:none;" onchange="uploadAssetToRepo(this, 'diploma-url-${idx}')" />
                </label>
              </div>
            </div>
          </div>
        `).join("")}
        <button type="button" class="admin-btn" onclick="addScriptItem('diploma')">+ add diploma script</button>

        <h4 class="typewriter-title" style="font-size: 1.15rem; color: var(--red); margin: 2rem 0 0.75rem;">Degree Scripts</h4>
        ${(s.degree || []).map((item, idx) => `
          <div class="admin-repeater-item">
            <div class="admin-repeater-header">
              <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">Degree Script #${idx + 1}</span>
              <button type="button" class="admin-btn admin-btn-danger" onclick="removeScriptItem('degree', ${idx})">remove</button>
            </div>
            <div class="admin-field">
              <label>Title</label>
              <input class="admin-input" id="degree-title-${idx}" value="${escapeHtml(item.title)}" onchange="saveCurrentFormToMemory()" />
            </div>
            <div class="admin-field" style="margin-bottom:0;">
              <label>PDF URL (or upload PDF file to GitHub repo)</label>
              <div class="admin-upload-row">
                <input class="admin-input" id="degree-url-${idx}" value="${escapeHtml(item.url)}" onchange="saveCurrentFormToMemory()" />
                <label class="admin-btn" style="margin:0;">
                  📤 upload PDF
                  <input type="file" accept=".pdf,application/pdf" style="display:none;" onchange="uploadAssetToRepo(this, 'degree-url-${idx}')" />
                </label>
              </div>
            </div>
          </div>
        `).join("")}
        <button type="button" class="admin-btn" onclick="addScriptItem('degree')">+ add degree script</button>
      </div>

      <div class="admin-panel-card">
        <h3>sinister roots (zine sample)</h3>
        <div class="admin-field">
          <label>Description</label>
          <textarea class="admin-textarea" id="edit-sr-desc" onchange="saveCurrentFormToMemory()">${escapeHtml(sr.description)}</textarea>
        </div>
        <div class="admin-field">
          <label>Content Warning</label>
          <input class="admin-input" id="edit-sr-warning" value="${escapeHtml(sr.warning)}" onchange="saveCurrentFormToMemory()" />
        </div>
        <div class="admin-field">
          <label>Cover Image URL</label>
          <div class="admin-upload-row">
            <input class="admin-input" id="edit-sr-cover" value="${escapeHtml(sr.coverImage)}" onchange="saveCurrentFormToMemory()" />
            <label class="admin-btn" style="margin:0;">
              📤 upload cover
              <input type="file" accept="image/*" style="display:none;" onchange="uploadAssetToRepo(this, 'edit-sr-cover')" />
            </label>
          </div>
        </div>
        <div class="admin-field">
          <label>Zine PDF URL</label>
          <div class="admin-upload-row">
            <input class="admin-input" id="edit-sr-pdf" value="${escapeHtml(sr.pdfUrl)}" onchange="saveCurrentFormToMemory()" />
            <label class="admin-btn" style="margin:0;">
              📤 upload PDF
              <input type="file" accept=".pdf,application/pdf" style="display:none;" onchange="uploadAssetToRepo(this, 'edit-sr-pdf')" />
            </label>
          </div>
        </div>
      </div>
    `;
  }

  if (adminActiveTab === "anna") {
    const a = SITE_CONTENT.anna;
    return `
      <div class="admin-panel-card">
        <h3>anna. (short story)</h3>
        <div class="admin-field">
          <label>Story Title</label>
          <input class="admin-input" id="edit-anna-title" value="${escapeHtml(a.title)}" onchange="saveCurrentFormToMemory()" />
        </div>
        <div class="admin-field">
          <label>Subtitle</label>
          <input class="admin-input" id="edit-anna-subtitle" value="${escapeHtml(a.subtitle)}" onchange="saveCurrentFormToMemory()" />
        </div>
        <div class="admin-field">
          <label>Story Content (separate paragraphs with a blank line; prefix time headings with <code>## </code>)</label>
          <textarea class="admin-textarea" id="edit-anna-body" style="min-height: 460px;" onchange="saveCurrentFormToMemory()">${escapeHtml((a.paragraphs || []).join("\n\n"))}</textarea>
        </div>
      </div>
    `;
  }

  if (adminActiveTab === "reviews") {
    return `
      <div class="admin-panel-card">
        <h3>audio devices reviews</h3>
        ${(SITE_CONTENT.audioDevices || []).map((item, idx) => `
          <div class="admin-repeater-item">
            <div class="admin-repeater-header">
              <strong style="font-family: var(--font-mono); color: #fff;">Audio Review #${idx + 1}: ${escapeHtml(item.title)}</strong>
              <button type="button" class="admin-btn admin-btn-danger" onclick="removeReviewItem('audioDevices', ${idx})">delete review</button>
            </div>
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 0.75rem;">
              <div class="admin-field">
                <label>Device Title</label>
                <input class="admin-input" id="audio-title-${idx}" value="${escapeHtml(item.title)}" onchange="saveCurrentFormToMemory()" />
              </div>
              <div class="admin-field">
                <label>Score Badge (e.g. overall: 8.5/10)</label>
                <input class="admin-input" id="audio-badge-${idx}" value="${escapeHtml(item.badge)}" onchange="saveCurrentFormToMemory()" />
              </div>
            </div>
            <div class="admin-field">
              <label>Image URL</label>
              <div class="admin-upload-row">
                <input class="admin-input" id="audio-img-${idx}" value="${escapeHtml(item.image)}" onchange="saveCurrentFormToMemory()" />
                <label class="admin-btn" style="margin:0;">
                  📤 upload photo
                  <input type="file" accept="image/*" style="display:none;" onchange="uploadAssetToRepo(this, 'audio-img-${idx}')" />
                </label>
              </div>
            </div>
            <div class="admin-field">
              <label>Summary / TL;DR Box</label>
              <textarea class="admin-textarea" id="audio-tldr-${idx}" style="min-height: 65px;" onchange="saveCurrentFormToMemory()">${escapeHtml(item.tldr)}</textarea>
            </div>
            <div class="admin-field" style="margin-bottom:0;">
              <label>Review Paragraphs (separate paragraphs with a blank line)</label>
              <textarea class="admin-textarea" id="audio-body-${idx}" style="min-height: 150px;" onchange="saveCurrentFormToMemory()">${escapeHtml((item.paragraphs || []).join("\n\n"))}</textarea>
            </div>
          </div>
        `).join("")}
        <button type="button" class="admin-btn" onclick="addReviewItem('audioDevices')">+ add new audio device review</button>
      </div>

      <div class="admin-panel-card">
        <h3>phone reviews</h3>
        ${(SITE_CONTENT.phones || []).map((item, idx) => `
          <div class="admin-repeater-item">
            <div class="admin-repeater-header">
              <strong style="font-family: var(--font-mono); color: #fff;">Phone Review #${idx + 1}: ${escapeHtml(item.title)}</strong>
              <button type="button" class="admin-btn admin-btn-danger" onclick="removeReviewItem('phones', ${idx})">delete review</button>
            </div>
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 0.75rem;">
              <div class="admin-field">
                <label>Phone Name</label>
                <input class="admin-input" id="phone-title-${idx}" value="${escapeHtml(item.title)}" onchange="saveCurrentFormToMemory()" />
              </div>
              <div class="admin-field">
                <label>Score Badge</label>
                <input class="admin-input" id="phone-badge-${idx}" value="${escapeHtml(item.badge)}" onchange="saveCurrentFormToMemory()" />
              </div>
            </div>
            <div class="admin-field">
              <label>Image URL</label>
              <div class="admin-upload-row">
                <input class="admin-input" id="phone-img-${idx}" value="${escapeHtml(item.image)}" onchange="saveCurrentFormToMemory()" />
                <label class="admin-btn" style="margin:0;">
                  📤 upload photo
                  <input type="file" accept="image/*" style="display:none;" onchange="uploadAssetToRepo(this, 'phone-img-${idx}')" />
                </label>
              </div>
            </div>
            <div class="admin-field">
              <label>Initial Review Box</label>
              <textarea class="admin-textarea" id="phone-tldr-${idx}" style="min-height: 80px;" onchange="saveCurrentFormToMemory()">${escapeHtml(item.tldr)}</textarea>
            </div>
            <div class="admin-field" style="margin-bottom:0;">
              <label>Updated Review Paragraphs (separate paragraphs with a blank line)</label>
              <textarea class="admin-textarea" id="phone-body-${idx}" style="min-height: 150px;" onchange="saveCurrentFormToMemory()">${escapeHtml((item.paragraphs || []).join("\n\n"))}</textarea>
            </div>
          </div>
        `).join("")}
        <button type="button" class="admin-btn" onclick="addReviewItem('phones')">+ add new phone review</button>
      </div>
    `;
  }

  if (adminActiveTab === "articles") {
    const va = SITE_CONTENT.voiceActing;
    const cb = SITE_CONTENT.cyberdecks;
    const mb = SITE_CONTENT.musicBurnout;
    return `
      <div class="admin-panel-card">
        <h3>experiences: voice-acting</h3>
        <div class="admin-field">
          <label>Title</label>
          <input class="admin-input" id="edit-va-title" value="${escapeHtml(va.title)}" onchange="saveCurrentFormToMemory()" />
        </div>
        <div class="admin-field">
          <label>Paragraphs (separate with a blank line)</label>
          <textarea class="admin-textarea" id="edit-va-body" style="min-height: 180px;" onchange="saveCurrentFormToMemory()">${escapeHtml((va.paragraphs || []).join("\n\n"))}</textarea>
        </div>
      </div>

      <div class="admin-panel-card">
        <h3>fantasizing tech: wonders of cyberdecks</h3>
        <div class="admin-field">
          <label>Title</label>
          <input class="admin-input" id="edit-cb-title" value="${escapeHtml(cb.title)}" onchange="saveCurrentFormToMemory()" />
        </div>
        <div class="admin-field">
          <label>Paragraphs (separate with a blank line)</label>
          <textarea class="admin-textarea" id="edit-cb-body" style="min-height: 160px;" onchange="saveCurrentFormToMemory()">${escapeHtml((cb.paragraphs || []).join("\n\n"))}</textarea>
        </div>
      </div>

      <div class="admin-panel-card">
        <h3>shoughrts: music burnout</h3>
        <div class="admin-field">
          <label>Title</label>
          <input class="admin-input" id="edit-mb-title" value="${escapeHtml(mb.title)}" onchange="saveCurrentFormToMemory()" />
        </div>
        <div class="admin-field">
          <label>Paragraphs (separate with a blank line)</label>
          <textarea class="admin-textarea" id="edit-mb-body" style="min-height: 180px;" onchange="saveCurrentFormToMemory()">${escapeHtml((mb.paragraphs || []).join("\n\n"))}</textarea>
        </div>
      </div>
    `;
  }

  if (adminActiveTab === "settings") {
    return `
      <div class="admin-panel-card">
        <h3>⚙ github sync &amp; backup</h3>
        <p style="font-family: var(--font-sans); color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.25rem;">
          All edits are saved immediately in your browser when you click <strong>💾 save changes</strong>. To push changes directly to <code>https://alonecult.github.io</code> with one click, optionally paste a GitHub Personal Access Token (<code>repo</code> scope) below—or copy/download <code>content.json</code> anytime.
        </p>
        <div class="admin-field">
          <label>Optional GitHub Personal Access Token (for 1-click live GitHub commits)</label>
          <input
            class="admin-input"
            type="password"
            id="edit-gh-token"
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
            value="${escapeHtml(adminSession.token || "")}"
            onchange="saveCurrentFormToMemory()"
          />
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1rem;">
          <a
            class="admin-btn"
            href="https://github.com/settings/tokens/new?description=alonecult.github.io+Admin+CMS&scopes=repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔑 generate GitHub token ↗
          </a>
          <button type="button" class="admin-btn" onclick="copyContentJson()">
            📋 copy content.json
          </button>
          <button type="button" class="admin-btn" onclick="downloadContentJson()">
            ⬇ download content.json
          </button>
        </div>
      </div>
    `;
  }

  return "";
}

function copyContentJson() {
  saveCurrentFormToMemory();
  navigator.clipboard.writeText(JSON.stringify(SITE_CONTENT, null, 2));
  showAdminStatus("📋 Copied content.json to clipboard!");
}

function downloadContentJson() {
  saveCurrentFormToMemory();
  const blob = new Blob([JSON.stringify(SITE_CONTENT, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "content.json";
  a.click();
  showAdminStatus("⬇ Downloaded content.json!");
}

function splitParagraphs(text) {
  return String(text || "")
    .split(/\n\s*\n/)
    .map(s => s.trim())
    .filter(Boolean);
}

function saveCurrentFormToMemory() {
  if (!adminSession.authenticated) return;

  if (adminActiveTab === "home") {
    const hl = document.getElementById("edit-home-headline");
    if (!hl) return;
    SITE_CONTENT.home.headline = hl.value;
    SITE_CONTENT.home.subheadline = document.getElementById("edit-home-subheadline")?.value || "";
    SITE_CONTENT.home.aboutParagraphs = splitParagraphs(document.getElementById("edit-home-about")?.value || "");
    SITE_CONTENT.home.quote = document.getElementById("edit-home-quote")?.value || "";
    SITE_CONTENT.home.heroPhotoMain = document.getElementById("edit-home-photo1")?.value || "";
    SITE_CONTENT.home.heroPhotoSecondary = document.getElementById("edit-home-photo2")?.value || "";
    SITE_CONTENT.home.aboutPhoto = document.getElementById("edit-home-aboutphoto")?.value || "";
    SITE_CONTENT.home.email = document.getElementById("edit-home-email")?.value || "";
    SITE_CONTENT.home.instagramHandle = document.getElementById("edit-home-ig-handle")?.value || "";
    SITE_CONTENT.home.instagramUrl = document.getElementById("edit-home-ig-url")?.value || "";
  } else if (adminActiveTab === "scripts") {
    const intro = document.getElementById("edit-scripts-intro");
    if (!intro) return;
    SITE_CONTENT.scripts.intro = intro.value;
    SITE_CONTENT.scripts.diploma = (SITE_CONTENT.scripts.diploma || []).map((item, idx) => ({
      title: document.getElementById(`diploma-title-${idx}`)?.value ?? item.title,
      url: document.getElementById(`diploma-url-${idx}`)?.value ?? item.url
    }));
    SITE_CONTENT.scripts.degree = (SITE_CONTENT.scripts.degree || []).map((item, idx) => ({
      title: document.getElementById(`degree-title-${idx}`)?.value ?? item.title,
      url: document.getElementById(`degree-url-${idx}`)?.value ?? item.url
    }));
    SITE_CONTENT.sinisterRoots.description = document.getElementById("edit-sr-desc")?.value || "";
    SITE_CONTENT.sinisterRoots.warning = document.getElementById("edit-sr-warning")?.value || "";
    SITE_CONTENT.sinisterRoots.coverImage = document.getElementById("edit-sr-cover")?.value || "";
    SITE_CONTENT.sinisterRoots.pdfUrl = document.getElementById("edit-sr-pdf")?.value || "";
  } else if (adminActiveTab === "anna") {
    const t = document.getElementById("edit-anna-title");
    if (!t) return;
    SITE_CONTENT.anna.title = t.value;
    SITE_CONTENT.anna.subtitle = document.getElementById("edit-anna-subtitle")?.value || "";
    SITE_CONTENT.anna.paragraphs = splitParagraphs(document.getElementById("edit-anna-body")?.value || "");
  } else if (adminActiveTab === "reviews") {
    const firstCheck = document.getElementById("audio-title-0") || document.getElementById("phone-title-0");
    if (!firstCheck && (SITE_CONTENT.audioDevices.length > 0 || SITE_CONTENT.phones.length > 0)) return;
    SITE_CONTENT.audioDevices = (SITE_CONTENT.audioDevices || []).map((item, idx) => ({
      ...item,
      title: document.getElementById(`audio-title-${idx}`)?.value ?? item.title,
      badge: document.getElementById(`audio-badge-${idx}`)?.value ?? item.badge,
      image: document.getElementById(`audio-img-${idx}`)?.value ?? item.image,
      tldr: document.getElementById(`audio-tldr-${idx}`)?.value ?? item.tldr,
      paragraphs: splitParagraphs(document.getElementById(`audio-body-${idx}`)?.value ?? (item.paragraphs || []).join("\n\n"))
    }));
    SITE_CONTENT.phones = (SITE_CONTENT.phones || []).map((item, idx) => ({
      ...item,
      title: document.getElementById(`phone-title-${idx}`)?.value ?? item.title,
      badge: document.getElementById(`phone-badge-${idx}`)?.value ?? item.badge,
      image: document.getElementById(`phone-img-${idx}`)?.value ?? item.image,
      tldr: document.getElementById(`phone-tldr-${idx}`)?.value ?? item.tldr,
      paragraphs: splitParagraphs(document.getElementById(`phone-body-${idx}`)?.value ?? (item.paragraphs || []).join("\n\n"))
    }));
  } else if (adminActiveTab === "articles") {
    const vaTitle = document.getElementById("edit-va-title");
    if (!vaTitle) return;
    SITE_CONTENT.voiceActing.title = vaTitle.value;
    SITE_CONTENT.voiceActing.paragraphs = splitParagraphs(document.getElementById("edit-va-body")?.value || "");
    SITE_CONTENT.cyberdecks.title = document.getElementById("edit-cb-title")?.value || "";
    SITE_CONTENT.cyberdecks.paragraphs = splitParagraphs(document.getElementById("edit-cb-body")?.value || "");
    SITE_CONTENT.musicBurnout.title = document.getElementById("edit-mb-title")?.value || "";
    SITE_CONTENT.musicBurnout.paragraphs = splitParagraphs(document.getElementById("edit-mb-body")?.value || "");
  } else if (adminActiveTab === "settings") {
    const tokInput = document.getElementById("edit-gh-token");
    if (tokInput) {
      adminSession.token = tokInput.value.trim();
      localStorage.setItem("alonecult_gh_token", adminSession.token);
    }
  }

  // Stamp today's date in DD-MM-YYYY
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  SITE_CONTENT.home.lastEdit = `${dd}-${mm}-${yyyy}`;
  localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
  updateFooterFromContent();
}

function addScriptItem(category) {
  saveCurrentFormToMemory();
  SITE_CONTENT.scripts[category].push({ title: "New Script.pdf", url: "https://" });
  renderCurrentRoute();
}

function removeScriptItem(category, idx) {
  saveCurrentFormToMemory();
  SITE_CONTENT.scripts[category].splice(idx, 1);
  renderCurrentRoute();
}

function addReviewItem(category) {
  saveCurrentFormToMemory();
  SITE_CONTENT[category].push({
    title: "New Device Review",
    badge: "overall: 8/10",
    image: "",
    imageLeft: false,
    tldr: "Quality: great\nPerformance: solid",
    paragraphs: ["Write your full review here..."]
  });
  renderCurrentRoute();
}

function removeReviewItem(category, idx) {
  saveCurrentFormToMemory();
  SITE_CONTENT[category].splice(idx, 1);
  renderCurrentRoute();
}

function toBase64Utf8(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function uploadAssetToRepo(fileInput, targetInputId) {
  const file = fileInput?.files?.[0];
  if (!file || !adminSession.authenticated) return;

  if (!adminSession.token) {
    showAdminStatus("To upload files directly to GitHub, add your GitHub token in the '⚙ github sync' tab first.", true);
    return;
  }

  showAdminStatus(`Uploading ${file.name} to GitHub repository...`);
  try {
    const arrayBuffer = await file.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64Content = btoa(binary);
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const repoPath = `assets/${Date.now()}_${safeName}`;

    const putRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${repoPath}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${adminSession.token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: `Upload asset ${safeName} via Admin CMS`,
        content: base64Content,
        branch: GITHUB_BRANCH
      })
    });

    if (!putRes.ok) {
      const errData = await putRes.json().catch(() => ({}));
      throw new Error(errData.message || `Failed to upload ${file.name}`);
    }

    const publicUrl = `https://${GITHUB_OWNER}.github.io/${repoPath}`;
    const targetInput = document.getElementById(targetInputId);
    if (targetInput) {
      targetInput.value = publicUrl;
      saveCurrentFormToMemory();
    }
    showAdminStatus(`Uploaded ${file.name}! Click "🚀 publish to live GitHub" to save all content changes.`);
  } catch (err) {
    showAdminStatus(err.message || "Asset upload failed.", true);
  }
}

async function publishToGitHub() {
  if (!adminSession.authenticated) return;
  saveCurrentFormToMemory();

  if (!adminSession.token) {
    adminActiveTab = "settings";
    renderCurrentRoute();
    showAdminStatus("Saved locally! To push directly to GitHub Pages, paste your GitHub token below or click '📋 copy content.json'.");
    return;
  }

  const btn = document.getElementById("publish-github-btn");
  if (btn) {
    btn.disabled = true;
    btn.textContent = "⏳ publishing to GitHub...";
  }
  showAdminStatus("Committing updated content.json to alonecult/alonecult.github.io...");

  try {
    const fileUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/content.json`;
    let existingSha = undefined;

    const getRes = await fetch(`${fileUrl}?ref=${GITHUB_BRANCH}`, {
      headers: {
        Authorization: `Bearer ${adminSession.token}`,
        Accept: "application/vnd.github+json"
      }
    });
    if (getRes.ok) {
      const existingData = await getRes.json();
      existingSha = existingData.sha;
    }

    const jsonString = JSON.stringify(SITE_CONTENT, null, 2);
    const putBody = {
      message: `Update portfolio content via Admin CMS (${SITE_CONTENT.home.lastEdit})`,
      content: toBase64Utf8(jsonString),
      branch: GITHUB_BRANCH
    };
    if (existingSha) putBody.sha = existingSha;

    const putRes = await fetch(fileUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${adminSession.token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(putBody)
    });

    if (!putRes.ok) {
      const errData = await putRes.json().catch(() => ({}));
      throw new Error(errData.message || "Failed to commit content.json to GitHub.");
    }

    showAdminStatus("✅ Published! Your changes are committed to alonecult/alonecult.github.io and going live on GitHub Pages.");
  } catch (err) {
    showAdminStatus(err.message || "Failed to publish changes.", true);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "🚀 publish to live GitHub";
    }
  }
}

// ==================== ROUTER & INITIALIZATION ====================
function navigateTo(route, scrollToId = null) {
  if (adminSession.authenticated && window.location.hash.replace(/^#\/?/, "") === "admin") {
    saveCurrentFormToMemory();
  }
  const slug = PAGES[route] ? route : "home";
  if (window.location.hash !== `#${slug}`) {
    history.pushState(null, "", `#${slug}`);
  }
  renderCurrentRoute(scrollToId);
}

let selectedWixElement = null;

function renderCustomWixElementsForRoute(slug) {
  if (slug === "admin") return "";
  const layouts = getLayouts();
  const customList = (layouts.customElements && layouts.customElements[slug]) || [];
  if (!customList.length) return "";

  return `
    <div class="page-section" style="padding-top: 0;">
      <div class="wix-custom-elements-layer">
        ${customList.map((el) => {
          if (el.type === "heading") {
            return `<div class="wix-custom-element" data-drag-id="${escapeHtml(el.id)}" data-wix-custom="true"><h2 class="typewriter-title" style="font-size:2rem;">${escapeHtml(el.text)}</h2></div>`;
          }
          if (el.type === "quote") {
            return `<div class="quote-banner wix-custom-element" data-drag-id="${escapeHtml(el.id)}" data-wix-custom="true"><blockquote>${escapeHtml(el.text)}</blockquote></div>`;
          }
          if (el.type === "image") {
            return `
              <div class="feature-figure wix-custom-element" data-drag-id="${escapeHtml(el.id)}" data-wix-custom="true" style="max-width:360px; margin:0 auto;">
                <img src="${escapeHtml(el.src)}" alt="${escapeHtml(el.caption || 'custom image')}" />
                <div class="feature-caption">${escapeHtml(el.caption || "")}</div>
              </div>
            `;
          }
          if (el.type === "button") {
            return `
              <div class="wix-custom-element" data-drag-id="${escapeHtml(el.id)}" data-wix-custom="true">
                <a class="download-btn" href="${escapeHtml(el.url || '#')}" target="_blank" rel="noopener noreferrer">${escapeHtml(el.text)}</a>
              </div>
            `;
          }
          if (el.type === "divider") {
            return `
              <div class="wix-custom-element" data-drag-id="${escapeHtml(el.id)}" data-wix-custom="true" style="text-align:center; padding:1rem 0; border-bottom:1px dashed var(--red); font-family:var(--font-mono); color:var(--red);">
                ${escapeHtml(el.text || "✦ ✦ ✦")}
              </div>
            `;
          }
          return `<div class="story-body wix-custom-element" data-drag-id="${escapeHtml(el.id)}" data-wix-custom="true"><p>${escapeHtml(el.text)}</p></div>`;
        }).join("")}
      </div>
    </div>
  `;
}

function getElementTransformString(offset) {
  if (!offset) return "";
  const x = Number(offset.x) || 0;
  const y = Number(offset.y) || 0;
  const s = Number(offset.scale) || 1;
  if (!x && !y && s === 1) return "";
  return `translate3d(${x}px, ${y}px, 0) scale(${s.toFixed(3)})`;
}

function applySavedFreeformPositions() {
  const layouts = getLayouts();
  const posMap = layouts.freeformPositions || {};
  const styleMap = layouts.elementStyles || {};

  document.querySelectorAll("[data-drag-id]").forEach((el) => {
    const id = el.getAttribute("data-drag-id");
    const offset = posMap[id];
    el.style.transform = getElementTransformString(offset);
    el.style.transformOrigin = "top left";

    const st = styleMap[id];
    if (st) {
      if (st.hidden) {
        el.style.display = "none";
      } else {
        el.style.display = "";
      }
      if (st.color) el.style.color = st.color;
      if (st.zIndex !== undefined) el.style.zIndex = String(st.zIndex);
      if (st.customImgSrc) {
        const img = el.tagName === "IMG" ? el : el.querySelector("img");
        if (img) img.src = st.customImgSrc;
      }
      if (st.customText) {
        const textTarget = el.querySelector("h1, h2, h3, blockquote, p, span") || el;
        if (textTarget && !textTarget.querySelector("img")) {
          textTarget.innerText = st.customText;
        }
      }
    }
  });
}

function ensureWixFloatingToolbar() {
  let bar = document.getElementById("wix-floating-toolbar");
  if (bar) return bar;

  bar = document.createElement("div");
  bar.id = "wix-floating-toolbar";
  bar.className = "wix-floating-toolbar";
  bar.innerHTML = `
    <span id="wix-selected-label" style="color:#60a5fa; font-size:0.75rem; font-weight:700; padding:0 0.35rem;">Element</span>
    <span class="wix-tool-divider"></span>
    <button type="button" class="wix-tool-btn" onclick="wixInspectorAction('edit')">✏️ Edit Text / Image</button>
    <button type="button" class="wix-tool-btn" onclick="wixInspectorAction('scaleDown')" title="Shrink Element">📏 -</button>
    <button type="button" class="wix-tool-btn" onclick="wixInspectorAction('scaleUp')" title="Enlarge Element">📏 +</button>
    <label class="wix-tool-btn" style="margin:0; cursor:pointer;" title="Tint Text/Border Color">
      🎨 Color
      <input type="color" id="wix-inspector-color" value="#df2929" style="width:18px; height:18px; border:none; background:none; padding:0; cursor:pointer;" onchange="wixInspectorAction('color', this.value)" />
    </label>
    <button type="button" class="wix-tool-btn" onclick="wixInspectorAction('front')" title="Bring Forward">⬆ Front</button>
    <button type="button" class="wix-tool-btn" onclick="wixInspectorAction('back')" title="Send Backward">⬇ Back</button>
    <button type="button" class="wix-tool-btn" onclick="wixInspectorAction('clone')" title="Duplicate Element">⎘ Clone</button>
    <button type="button" class="wix-tool-btn" onclick="wixInspectorAction('reset')" title="Reset Element">↺ Reset</button>
    <button type="button" class="wix-tool-btn danger" onclick="wixInspectorAction('delete')" title="Hide / Delete Element">🗑</button>
  `;
  document.body.appendChild(bar);
  return bar;
}

function selectWixElement(el) {
  document.querySelectorAll("[data-drag-id].wix-selected").forEach((node) => {
    if (node !== el) node.classList.remove("wix-selected");
  });
  selectedWixElement = el;
  const bar = ensureWixFloatingToolbar();
  if (!el) {
    bar.classList.remove("visible");
    return;
  }
  el.classList.add("wix-selected");
  const id = el.getAttribute("data-drag-id") || "element";
  const lbl = document.getElementById("wix-selected-label");
  if (lbl) lbl.textContent = `✦ ${id}`;
  bar.classList.add("visible");
}

function wixInspectorAction(action, value = null) {
  if (!selectedWixElement) return;
  const dragId = selectedWixElement.getAttribute("data-drag-id");
  if (!dragId) return;

  const layouts = getLayouts();
  if (!layouts.freeformPositions) layouts.freeformPositions = {};
  if (!layouts.elementStyles) layouts.elementStyles = {};
  const pos = layouts.freeformPositions[dragId] || { x: 0, y: 0, scale: 1 };
  const st = layouts.elementStyles[dragId] || {};

  if (action === "scaleUp" || action === "scaleDown") {
    const curScale = Number(pos.scale) || 1;
    const nextScale = Math.max(0.4, Math.min(2.4, curScale + (action === "scaleUp" ? 0.1 : -0.1)));
    pos.scale = Number(nextScale.toFixed(2));
    layouts.freeformPositions[dragId] = pos;
    selectedWixElement.style.transform = getElementTransformString(pos);
  } else if (action === "color" && value) {
    st.color = value;
    layouts.elementStyles[dragId] = st;
    selectedWixElement.style.color = value;
  } else if (action === "front" || action === "back") {
    const curZ = Number(st.zIndex) || 10;
    const nextZ = Math.max(1, curZ + (action === "front" ? 5 : -5));
    st.zIndex = nextZ;
    layouts.elementStyles[dragId] = st;
    selectedWixElement.style.zIndex = String(nextZ);
  } else if (action === "reset") {
    delete layouts.freeformPositions[dragId];
    delete layouts.elementStyles[dragId];
    selectedWixElement.style.transform = "";
    selectedWixElement.style.color = "";
    selectedWixElement.style.zIndex = "";
  } else if (action === "delete") {
    const hash = window.location.hash.replace(/^#\/?/, "").trim() || "home";
    if (layouts.customElements && Array.isArray(layouts.customElements[hash])) {
      const beforeLen = layouts.customElements[hash].length;
      layouts.customElements[hash] = layouts.customElements[hash].filter(item => item.id !== dragId);
      if (layouts.customElements[hash].length < beforeLen) {
        selectedWixElement.remove();
        selectWixElement(null);
        localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
        return;
      }
    }
    st.hidden = true;
    layouts.elementStyles[dragId] = st;
    selectedWixElement.style.display = "none";
    selectWixElement(null);
  } else if (action === "clone") {
    const hash = window.location.hash.replace(/^#\/?/, "").trim() || "home";
    if (!layouts.customElements) layouts.customElements = {};
    if (!Array.isArray(layouts.customElements[hash])) layouts.customElements[hash] = [];
    const img = selectedWixElement.querySelector("img");
    const newId = `wix-clone-${Date.now()}`;
    if (img) {
      layouts.customElements[hash].push({ id: newId, type: "image", src: img.src, caption: "cloned photo" });
    } else {
      layouts.customElements[hash].push({ id: newId, type: "paragraph", text: selectedWixElement.innerText || "Cloned block" });
    }
    localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
    renderCurrentRoute();
    return;
  } else if (action === "edit") {
    const img = selectedWixElement.tagName === "IMG" ? selectedWixElement : selectedWixElement.querySelector("img");
    if (img && !selectedWixElement.querySelector("p, h1, h2")) {
      const nextUrl = window.prompt("Enter new Image URL for this photo/sticker:", img.src);
      if (nextUrl && nextUrl.trim()) {
        img.src = nextUrl.trim();
        st.customImgSrc = nextUrl.trim();
        layouts.elementStyles[dragId] = st;
      }
    } else {
      activateInlineTextEdit(selectedWixElement);
      return;
    }
  }

  localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
}

function activateInlineTextEdit(el) {
  const target = el.querySelector("h1, h2, h3, blockquote, p, span") || el;
  if (!target) return;
  target.setAttribute("contenteditable", "true");
  target.classList.add("wix-inline-editing");
  target.focus();

  const onBlur = () => {
    target.removeAttribute("contenteditable");
    target.classList.remove("wix-inline-editing");
    target.removeEventListener("blur", onBlur);

    const dragId = el.getAttribute("data-drag-id");
    if (dragId) {
      const layouts = getLayouts();
      if (!layouts.elementStyles) layouts.elementStyles = {};
      if (!layouts.elementStyles[dragId]) layouts.elementStyles[dragId] = {};
      layouts.elementStyles[dragId].customText = target.innerText;
      localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
    }
  };
  target.addEventListener("blur", onBlur);
}

function initInteractivePageDragging() {
  const isDragPreview = window.location.search.includes("drag=1");
  document.body.classList.toggle("visual-drag-mode", isDragPreview);
  if (!isDragPreview) {
    const bar = document.getElementById("wix-floating-toolbar");
    if (bar) bar.classList.remove("visible");
    return;
  }

  ensureWixFloatingToolbar();

  document.querySelectorAll("[data-drag-id]").forEach((el) => {
    // Attach corner resize handle if not already present
    if (!el.querySelector(".wix-resize-handle")) {
      const handle = document.createElement("span");
      handle.className = "wix-resize-handle";
      handle.title = "Drag to resize / scale element";
      handle.addEventListener("pointerdown", (e) => {
        e.stopPropagation();
        e.preventDefault();
        selectWixElement(el);

        const dragId = el.getAttribute("data-drag-id");
        const layouts = getLayouts();
        if (!layouts.freeformPositions) layouts.freeformPositions = {};
        const current = layouts.freeformPositions[dragId] || { x: 0, y: 0, scale: 1 };
        const startX = e.clientX;
        const origScale = Number(current.scale) || 1;

        try { handle.setPointerCapture(e.pointerId); } catch (_) {}

        const onResizeMove = (mv) => {
          const delta = (mv.clientX - startX) / 220;
          const nextScale = Math.max(0.4, Math.min(2.4, origScale + delta));
          current.scale = Number(nextScale.toFixed(2));
          layouts.freeformPositions[dragId] = current;
          el.style.transform = getElementTransformString(current);
        };

        const onResizeUp = (up) => {
          try { handle.releasePointerCapture(up.pointerId); } catch (_) {}
          handle.removeEventListener("pointermove", onResizeMove);
          handle.removeEventListener("pointerup", onResizeUp);
          localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
        };

        handle.addEventListener("pointermove", onResizeMove);
        handle.addEventListener("pointerup", onResizeUp);
      });
      el.appendChild(handle);
    }

    // Drag to move + click to select in Wix Inspector
    el.addEventListener("pointerdown", (e) => {
      if (e.target.classList.contains("wix-resize-handle")) return;
      if (e.target.getAttribute("contenteditable") === "true") return;
      if (e.button !== 0 && e.pointerType === "mouse") return;
      e.stopPropagation();
      e.preventDefault();

      selectWixElement(el);

      const dragId = el.getAttribute("data-drag-id");
      const layouts = getLayouts();
      if (!layouts.freeformPositions) layouts.freeformPositions = {};
      const current = layouts.freeformPositions[dragId] || { x: 0, y: 0, scale: 1 };

      const startX = e.clientX;
      const startY = e.clientY;
      const origX = Number(current.x) || 0;
      const origY = Number(current.y) || 0;
      const curScale = Number(current.scale) || 1;

      el.classList.add("is-dragging");
      try {
        el.setPointerCapture(e.pointerId);
      } catch (_) {}

      const onMove = (moveEvt) => {
        const dx = moveEvt.clientX - startX;
        const dy = moveEvt.clientY - startY;
        const nextX = Math.round(origX + dx);
        const nextY = Math.round(origY + dy);
        current.x = nextX;
        current.y = nextY;
        current.scale = curScale;
        el.style.transform = getElementTransformString(current);
        layouts.freeformPositions[dragId] = current;
      };

      const onUp = (upEvt) => {
        el.classList.remove("is-dragging");
        try {
          el.releasePointerCapture(upEvt.pointerId);
        } catch (_) {}
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerup", onUp);
        el.removeEventListener("pointercancel", onUp);
        localStorage.setItem("alonecult_custom_content", JSON.stringify(SITE_CONTENT));
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerup", onUp);
      el.addEventListener("pointercancel", onUp);
    });

    // Double-click activates inline text editing (or resets if image)
    el.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      e.preventDefault();
      selectWixElement(el);
      const hasText = el.querySelector("h1, h2, h3, blockquote, p");
      if (hasText) {
        activateInlineTextEdit(el);
      } else {
        wixInspectorAction("reset");
      }
    });

    // Prevent clicking links inside preview when in drag mode
    el.addEventListener("click", (e) => {
      if (document.body.classList.contains("visual-drag-mode")) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  });
}

function renderCurrentRoute(scrollToId = null) {
  const hash = window.location.hash.replace(/^#\/?/, "").trim();
  const slug = PAGES[hash] ? hash : "home";
  const page = PAGES[slug];

  document.title = page.title;
  const appEl = document.getElementById("app");
  if (appEl) {
    appEl.innerHTML = page.render() + renderCustomWixElementsForRoute(slug);
  }

  applySavedFreeformPositions();
  initInteractivePageDragging();

  document.querySelectorAll("[data-route]").forEach((el) => {
    el.classList.toggle("active", el.getAttribute("data-route") === slug);
  });

  const nav = document.getElementById("site-nav");
  if (nav) {
    nav.classList.remove("open");
    nav.querySelectorAll(".nav-item.open").forEach((item) => item.classList.remove("open"));
  }

  if (scrollToId) {
    const target = document.getElementById(scrollToId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function loadRemoteContent() {
  try {
    const res = await fetch(`content.json?t=${Date.now()}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data && data.home) {
        const localDraft = localStorage.getItem("alonecult_custom_content");
        SITE_CONTENT = localDraft ? JSON.parse(localDraft) : data;
        updateFooterFromContent();
        renderCurrentRoute();
      }
    }
  } catch (_) {
    // Fallback to embedded DEFAULT_CONTENT or localDraft
  }
}

window.addEventListener("hashchange", () => renderCurrentRoute());
window.addEventListener("DOMContentLoaded", () => {
  // Restore local draft if edited in browser
  const localDraft = localStorage.getItem("alonecult_custom_content");
  if (localDraft) {
    try {
      SITE_CONTENT = JSON.parse(localDraft);
    } catch (_) {}
  }

  // Restore active admin session if unlocked in sessionStorage
  if (sessionStorage.getItem("alonecult_admin_unlocked") === "true") {
    adminSession = {
      authenticated: true,
      token: localStorage.getItem("alonecult_gh_token") || "",
      user: { login: GITHUB_OWNER }
    };
  }

  const mobileBtn = document.getElementById("mobile-menu-btn");
  const nav = document.getElementById("site-nav");
  if (mobileBtn && nav) {
    mobileBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      if (!isOpen) {
        nav.querySelectorAll(".nav-item.open").forEach((item) => item.classList.remove("open"));
      }
    });

    // Accordion toggle for category buttons (e.g. 'works.', 'tech reviews', etc.)
    nav.querySelectorAll(".nav-dropdown-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const parentItem = btn.closest(".nav-item");
        if (!parentItem) return;
        const willOpen = !parentItem.classList.contains("open");
        nav.querySelectorAll(".nav-item.open").forEach((item) => item.classList.remove("open"));
        if (willOpen) {
          parentItem.classList.add("open");
        }
      });
    });
  }

  // Restore saved light/dark mode preference
  const savedTheme = localStorage.getItem("alonecult_theme_mode");
  const isLightInitial = savedTheme === "light";
  applyThemeMode(isLightInitial);

  const themeCb = document.getElementById("theme-switch-cb");
  if (themeCb) {
    themeCb.addEventListener("change", (e) => {
      const isLight = Boolean(e.target.checked);
      localStorage.setItem("alonecult_theme_mode", isLight ? "light" : "dark");
      applyThemeMode(isLight);
      refreshDeviceIframe();
    });
  }

  updateFooterFromContent();
  renderCurrentRoute();
  loadRemoteContent();
});
