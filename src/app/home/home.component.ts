import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  menuList = [
    { id: 1, name: 'home', isSelect: true, htmlId: '' },
    { id: 2, name: 'professional', isSelect: false, htmlId: 'prof' },
    { id: 3, name: 'experience', isSelect: false, htmlId: 'exp' },
    { id: 4, name: 'projects', isSelect: false, htmlId: 'project' },
    { id: 5, name: 'contact', isSelect: false, htmlId: 'contact' }
  ];
  profile: any = {
    name: 'Jothiraj', profession: 'full stack developer', objective: "Hi, I'm Jothiraj, With nearly two years of hands-on experience spanning both frontend and backend development, my career showcases a versatile skill set and a deep understanding of web technologies. Proficient in Angular 15, HTML, and Tailwind CSS, On the backend, my expertise lies in utilizing NestJS to build robust and scalable applications, complemented by adeptness in working with both MySQL and MongoDB databases. My journey in the tech industry has been defined by a commitment to delivering high-quality solutions that meet client needs and exceed expectations. Thank you for visiting my portfolio website!",
    skills: [{ skill: 'Angular 14', knowledge: 89 }, { skill: 'Type Script', knowledge: 80 }, { skill: 'Java Script', knowledge: 65 }, { skill: 'Tailwind Css', knowledge: 93 }, { skill: 'HTML', knowledge: 100 }, { skill: 'Nest Js', knowledge: 81 }, { skill: 'My SQL', knowledge: 75 }, { skill: 'Mongo', knowledge: 80 }],
    contact: [{ name: 'linkedIn', logo: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/jothi-raj-d/' }, { name: 'whatsapp', logo: 'fa-brands fa-whatsapp', url: 'https://api.whatsapp.com/send?phone=919962675336&text=Hello%20Jothiraj!' }, { name: 'instagram', logo: 'fa-brands fa-instagram', url: 'https://www.instagram.com/_me_joe/' }, { name: 'twitter', logo: 'fa-brands fa-x-twitter', url: 'https://twitter.com/Joeaskinas' }, { name: 'facebook', logo: 'fa-brands fa-square-facebook', url: 'https://www.facebook.com/jothiraj17' }],
    projects: [{ title: 'linkedIn static page', image: '../../assets/linkedIn.webp', description: '', url: 'https://linkedin-joe-static.web.app', tools: [{ name: 'Angular 14' }, { name: 'Tailwind css' }] }, { title: 'Real Estate website', image: '../../assets/real_estate_project.webp', description: '', url: 'https://aj-real-estate.web.app', tools: [{ name: 'React Js' }, { name: 'Tailwind css' }] }],
    journey: [
      {
        title: 'BCA',
        year: '2015-2018',
        role: 'Bachelor of Computer Application',
        description: 'I am a graduate of BCA from Patrician College of Arts and Science, where I graduated with honors in the first class. Recognized as an outstanding student, I received the Outstanding Student Award for my dedication to academic excellence and overall contributions to the college community.'
      },
      {
        title: 'MCA',
        year: '2019-2021',
        role: 'Master of Computer Application',
        description: 'I further pursued a Master of Computer Application (MCA) at TNOU, achieving the same distinction of graduating in the first class. These educational accomplishments reflect my strong dedication to learning and achieving excellence in the field of computer applications.'
      },
      {
        title: 'ReadyAssist',
        year: '2022-2023',
        role: 'Intern (Software Engineer)',
        description: 'I have practical experience gained through a 6-month internship at ReadyAssist, where I worked from November 2022 to May 2023. This internship allowed me to apply and enhance my skills in a real-world professional setting, contributing to my overall professional growth.'
      },
      {
        title: 'ReadyAssist',
        year: '2023-Till Now',
        role: 'Associate Software Engineer',
        description: "I began my journey at ReadyAssist. I embraced numerous learning opportunities and gradually transitioned to backend development. Now serving as a full-stack developer, I've gained valuable insights and honed my skills in creating end-to-end solutions."
      },
    ]
  }
  mailForm: any;
  isChat = false;
  messages: Array<{ user: string, text: string }> = [];
  inputText: string = '';
  abusive = ['fuck', 'ass', 'abortion', 'abuse', 'anal', 'analsex', 'anus', 'arsehole', 'assassin', 'assassinate', 'assassination', 'assault', 'assbagger', 'assblaster', 'assclown', 'asscowboy', 'asses', 'assfuck', 'assfucker', 'asshat', 'asshole', 'assholes', 'asshore', 'assjockey', 'asskiss', 'asskisser', 'assklown', 'asslick', 'asslicker', 'asslover', 'assman', 'assmonkey', 'assmunch', 'assmuncher', 'asspacker', 'asspirate', 'asspuppies', 'assranger', 'asswhore', 'asswipe', 'badfuck', 'balllicker', 'banging', 'barf', 'barface', 'barfface', 'bast', 'bastard', 'bazongas', 'bazooms', 'beaner', 'beast', 'beastality', 'beastial', 'beastiality', 'beatoff', 'bi', 'biatch', 'bicurious', 'bigass', 'bigbastard', 'bigbutt', 'bigger', 'bisexual', 'bi-sexual', 'bitch', 'bitcher', 'bitches', 'bitchez', 'bitchin', 'bitching', 'bitchslap', 'bitchy', 'blow', 'blowjob', 'boang', 'bohunk', 'bollick', 'bollock', 'bomb', 'bombers', 'bombing', 'dumbbitch', 'boobies', 'bombs', 'bomd', 'bondage', 'boner', 'bong', 'boob', 'boobs', 'booby', 'boody', 'boong', 'boonga', 'boonie', 'booty', 'bootycall', 'bountybar', 'bra', 'breast', 'breastjob', 'breastlover', 'breastman', 'brothel', 'bugger', 'buggered', 'buggery', 'bullcrap', 'bulldike', 'bulldyke', 'bullshit', 'bumblefuck', 'bumfuck', 'bunga', 'bunghole', 'buried', 'burn', 'butchbabes', 'butchdike', 'butchdyke', 'butt', 'buttbang', 'butt-bang', 'buttface', 'buttfuck', 'butt-fuck', 'buttfucker', 'butt-fucker', 'buttfuckers', 'butt-fuckers', 'butthead', 'buttman', 'buttmunch', 'buttmuncher', 'buttpirate', 'buttplug', 'buttstain', 'byatch', 'cacker', 'cameljockey', 'cameltoe', 'canadian', 'cancer', 'carpetmuncher', 'carruth', 'cherrypopper', 'chickslick', 'chink', 'chinky', 'choad', 'chode', 'cigs', 'clamdigger', 'clamdiver', 'clit', 'clitoris', 'clogwog', 'cocaine', 'cock', 'cockblock', 'cockblocker', 'cockcowboy', 'cockfight', 'cockhead', 'cockknob', 'cocklicker', 'cocklover', 'cocknob', 'cockqueen', 'cockrider', 'cocksman', 'cocksmith', 'cocksmoker', 'cocksucer', 'cocksuck ', 'cocksucked ', 'cocksucker', 'cocksucking', 'cocktail', 'cocktease', 'cocky', 'cohee', 'coitus', 'color', 'colored', 'coloured', 'commie', 'communist', 'condom', 'conservative', 'conspiracy', 'coolie', 'cooly', 'coon', 'coondog', 'copulate', 'cornhole', 'cra5h', 'crabs', 'crack', 'crackpipe', 'crackwhore', 'crack-whore', 'crap', 'crapola', 'crapper', 'crappy', 'crash', 'creamy', 'crime', 'crimes', 'criminal', 'criminals', 'crotch', 'crotchjockey', 'crotchmonkey', 'crotchrot', 'cum', 'cumbubble', 'cumfest', 'cumjockey', 'cumm', 'cummer', 'cumming', 'cumquat', 'cumqueen', 'cumshot', 'cunilingus', 'cunillingus', 'cunn', 'cunnilingus', 'cunntt', 'cunt', 'cunteyed', 'cuntfuck', 'cuntfucker', 'cuntlick ', 'cuntlicker ', 'cuntlicking ', 'cuntsucker', 'cybersex', 'cyberslimer', 'dago', 'dahmer', 'dammit', 'damn', 'damnation', 'damnit', 'darkie', 'darky', 'datnigga', 'dead', 'deapthroat', 'death', 'deepthroat', 'defecate', 'dego', 'demon', 'deposit', 'desire', 'destroy', 'deth', 'devil', 'devilworshipper', 'dick', 'dickbrain', 'dickforbrains', 'dickhead', 'dickless', 'dicklick', 'dicklicker', 'dickman', 'dickwad', 'dickweed', 'diddle', 'die', 'died', 'dies', 'dike', 'dildo', 'dingleberry', 'dink', 'dipshit', 'dipstick', 'dirty', 'disease', 'diseases', 'disturbed', 'dive', 'dix', 'dixiedike', 'dixiedyke', 'doggiestyle', 'doggystyle', 'dong', 'doodoo', 'doo-doo', 'doom', 'dope', 'dragqueen', 'dragqween', 'dripdick', 'drug', 'drunk', 'drunken', 'dumb', 'dumbass', 'dumbfuck', 'dyefly', 'dyke', 'easyslut', 'eatballs', 'eatme', 'eatpussy', 'ecstacy', 'ejaculate', 'ejaculated', 'ejaculating ', 'ejaculation', 'enema', 'enemy', 'erect', 'erection', 'ero', 'escort', 'ethiopian', 'ethnic', 'excrement', 'execute', 'executed', 'execution', 'executioner', 'explosion', 'facefucker', 'faeces', 'fag', 'fagging', 'faggot', 'fagot', 'failed', 'failure', 'fairies', 'fairy', 'faith', 'fannyfucker', 'fart', 'farted ', 'farting ', 'farty ', 'fastfuck', 'fat', 'fatah', 'fatass', 'fatfuck', 'fatfucker', 'fatso', 'fckcum', 'fear', 'feces', 'felatio ', 'felch', 'felcher', 'felching', 'fellatio', 'feltch', 'feltcher', 'feltching', 'fetish', 'fight', 'filipina', 'filipino', 'fingerfood', 'fingerfuck ', 'fingerfucked ', 'fingerfucker ', 'fingerfuckers', 'fingerfucking ', 'fire', 'firing', 'fister', 'fistfuck', 'fistfucked ', 'fistfucker', 'fistfucking', 'fisting', 'flange', 'flasher', 'flatulence', 'floo', 'flydie', 'flydye', 'fok', 'fondle', 'footaction', 'footfuck', 'footfucker', 'footlicker', 'footstar', 'fore', 'foreskin', 'forni', 'fornicate', 'foursome', 'fourtwenty', 'fraud', 'freakfuck', 'freakyfucker', 'freefuck', 'fu', 'fubar', 'fuc', 'fucck', 'fuck', 'fucka', 'fuckable', 'fuckbag', 'fuckbuddy', 'fucked', 'fuckedup', 'fucker', 'fuckers', 'fuckface', 'fuckfest', 'fuckfreak', 'fuckfriend', 'fuckhead', 'fuckher', 'fuckin', 'fuckina', 'fucking', 'fuckingbitch', 'fuckinnuts', 'fuckinright', 'fuckit', 'fuckknob', 'fuckme ', 'fuckmehard', 'fuckmonkey', 'fuckoff', 'fuckpig', 'fucks', 'fucktard', 'fuckwhore', 'fudgepacker', 'fugly', 'fuk', 'fuks', 'funeral', 'funfuck', 'fungus', 'fuuck', 'gangbang', 'gangbanged ', 'gangbanger', 'gangsta', 'gatorbait', 'gay', 'gaymuthafuckinwhore', 'gaysex ', 'geez', 'geezer', 'geni', 'genital', 'german', 'getiton', 'gin', 'ginzo', 'gipp', 'givehead', 'glazeddonut', 'godammit', 'goddamit', 'goddammit', 'goddamn', 'goddamned', 'goddamnes', 'goddamnit', 'goddamnmuthafucker', 'gonorrehea', 'gonzagas', 'gook', 'gotohell', 'goy', 'goyim', 'greaseball', 'gringo', 'groe', 'gross', 'grostulation', 'gubba', 'gummer', 'gun', 'gyp', 'gypo', 'gypp', 'gyppie', 'gyppo', 'gyppy', 'hamas', 'handjob', 'hapa', 'harder', 'hardon', 'headfuck', 'headlights', 'hebe', 'heeb', 'hell', 'henhouse', 'heroin', 'herpes', 'heterosexual', 'hijack', 'hijacker', 'hijacking', 'hindoo', 'hiscock', 'hitler', 'hitlerism', 'hitlerist', 'hobo', 'hodgie', 'hoes', 'hole', 'holestuffer', 'homicide', 'homo', 'homobangers', 'homosexual', 'honger', 'honk', 'honkers', 'honkey', 'honky', 'hook', 'hooker', 'hookers', 'hooters', 'hore', 'hork', 'horn', 'horney', 'horniest', 'horny', 'horseshit', 'hosejob', 'hoser', 'hostage', 'hotdamn', 'hotpussy', 'hottotrot', 'hussy', 'hustler', 'hymen', 'hymie', 'iblowu', 'idiot', 'ikey', 'incest', 'insest', 'intercourse', 'interracial', 'intheass', 'inthebuff', 'italiano', 'itch', 'jackass', 'jackoff', 'jackshit', 'jacktheripper', 'jade', 'japcrap', 'jebus', 'jeez', 'jerkoff', 'jesus', 'jesuschrist', 'jew', 'jewish', 'jiga', 'jigaboo', 'jigg', 'jigga', 'jiggabo', 'jigger ', 'jiggy', 'jihad', 'jijjiboo', 'jimfish', 'jism', 'jiz ', 'jizim', 'jizjuice', 'jizm ', 'jizz', 'jizzim', 'jizzum', 'joint', 'juggalo', 'jugs', 'junglebunny', 'kaffer', 'kaffir', 'kaffre', 'kafir', 'kanake', 'kid', 'kigger', 'kike', 'kill', 'killed', 'killer', 'killing', 'kills', 'kink', 'kinky', 'kissass', 'kkk', 'knife', 'knockers', 'kock', 'kondum', 'koon', 'kotex', 'krap', 'krappy', 'kraut', 'kum', 'kumbubble', 'kumbullbe', 'kummer', 'kumming', 'kumquat', 'kums', 'kunilingus', 'kunnilingus', 'kunt', 'ky', 'kyke', 'lactate', 'laid', 'lapdance', 'latin', 'lesbain', 'lesbayn', 'lesbian', 'lesbin', 'lesbo', 'lezbe', 'lezbefriends', 'lezbo', 'lezz', 'lezzo', 'liberal', 'licker', 'lickme', 'lies', 'limey', 'limpdick', 'limy', 'lingerie', 'liquor', 'livesex', 'loadedgun', 'lolita', 'looser', 'loser', 'lotion', 'lovebone', 'lovegoo', 'lovegun', 'lovejuice', 'lovemuscle', 'lovepistol', 'loverocket', 'lowlife', 'lsd', 'lubejob', 'lucifer', 'luckycammeltoe', 'lugan', 'lynch', 'macaca', 'mad', 'mafia', 'magicwand', 'mams', 'manhater', 'manpaste', 'marijuana', 'mastabate', 'mastabater', 'masterbate', 'masterblaster', 'mastrabator', 'masturbate', 'masturbating', 'mattressprincess', 'meatbeatter', 'meatrack', 'meth', 'mexican', 'mgger', 'mggor', 'mickeyfinn', 'mideast', 'milf', 'minority', 'mockey', 'mockie', 'mocky', 'mofo', 'moky', 'moles', 'molest', 'molestation', 'molester', 'molestor', 'moneyshot', 'mooncricket', 'mormon', 'moron', 'moslem', 'mosshead', 'mothafuck', 'mothafucka', 'mothafuckaz', 'mothafucked ', 'mothafucker', 'mothafuckin', 'mothafucking ', 'mothafuckings', 'motherfuck', 'motherfucked', 'motherfucker', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherlovebone', 'muff', 'muffdive', 'muffdiver', 'muffindiver', 'mufflikcer', 'mulatto', 'muncher', 'munt', 'murder', 'murderer', 'muslim', 'naked', 'narcotic', 'nasty', 'nastyho', 'nastyslut', 'nastywhore', 'nazi', 'necro', 'negro', 'negroes', 'negroid', 'nig', 'niger', 'nigerian', 'nigerians', 'nigg', 'nigga', 'niggah', 'niggaracci', 'niggard', 'niggarded', 'niggarding', 'niggardliness', 'niggardly', 'niggards', 'niggaz', 'nigger', 'niggerhead', 'niggerhole', 'niggers', 'nigger', 'niggle', 'niggled', 'niggles', 'niggling', 'nigglings', 'niggor', 'niggur', 'niglet', 'nignog', 'nigr', 'nigra', 'nigre', 'nip', 'nipple', 'nipplering', 'nittit', 'nlgger', 'nlggor', 'nofuckingway', 'nook', 'nookey', 'nookie', 'noonan', 'nooner', 'nude', 'nudger', 'nuke', 'nutfucker', 'nymph', 'ontherag', 'oral', 'orga', 'orgasim ', 'orgasm', 'orgies', 'orgy', 'osama', 'paki', 'palesimian', 'palestinian', 'pansies', 'pansy', 'panti', 'panties', 'payo', 'pearlnecklace', 'peck', 'pecker', 'peckerwood', 'pee', 'peehole', 'pee-pee', 'peepshpw', 'pendy', 'penetration', 'peni5', 'penile', 'penis', 'penises', 'penthouse', 'period', 'perv', 'phonesex', 'phuk', 'phuked', 'phuking', 'phukked', 'phukking', 'phungky', 'phuq', 'pi55', 'picaninny', 'piccaninny', 'pickaninny', 'piker', 'pikey', 'piky', 'pimp', 'pimped', 'pimper', 'pimpjuic', 'pimpjuice', 'pimpsimp', 'pindick', 'piss', 'pissed', 'pisser', 'pisses ', 'pisshead', 'pissin ', 'pissing', 'pissoff ', 'pistol', 'pixie', 'pixy', 'playboy', 'playgirl', 'pocha', 'pocho', 'pocketpool', 'pohm', 'polack', 'pom', 'pommie', 'pommy', 'poo', 'poon', 'poontang', 'poop', 'pooper', 'pooperscooper', 'pooping', 'poorwhitetrash', 'popimp', 'porchmonkey', 'porn', 'pornflick', 'pornking', 'porno', 'pornography', 'pornprincess', 'pot', 'poverty', 'premature', 'pric', 'prick', 'prickhead', 'primetime', 'propaganda', 'pros', 'prostitute', 'pu55i', 'pu55y', 'pube', 'pud', 'pudboy', 'pudd', 'puddboy', 'puke', 'puntang', 'purinapricness', 'puss', 'pussie', 'pussies', 'pussy', 'pussycat', 'pussyeater', 'pussyfucker', 'pussylicker', 'pussylips', 'pussylover', 'pussypounder', 'pusy', 'quashie', 'queef', 'queer', 'quickie', 'quim', 'ra8s', 'rabbi', 'racial', 'racist', 'radical', 'radicals', 'raghead', 'randy', 'rape', 'raped', 'raper', 'rapist', 'rectum', 'redlight', 'redneck', 'reefer', 'reestie', 'refugee', 'reject', 'remains', 'rentafuck', 'republican', 'rere', 'retard', 'retarded', 'ribbed', 'rigger', 'rimjob', 'rimming', 'roach', 'robber', 'roundeye', 'rump', 'russki', 'russkie', 'sadis', 'sadom', 'samckdaddy', 'sandm', 'sandnigger', 'satan', 'scag', 'scallywag', 'scat', 'schlong', 'screw', 'scrotum', 'scum', 'semen', 'seppo', 'servant', 'sex', 'sexed', 'sexfarm', 'sexhound', 'sexhouse', 'sexing', 'sexkitten', 'sexpot', 'sexslave', 'sextogo', 'sextoy', 'sextoys', 'sexual', 'sexually', 'sexwhore', 'sexy', 'sexymoma', 'sexy-slim', 'shag', 'shaggin', 'shagging', 'shat', 'shav', 'shawtypimp', 'sheeney', 'shhit', 'shinola', 'shit', 'shitcan', 'shitdick', 'shite', 'shiteater', 'shited', 'shitface', 'shitfaced', 'shitfit', 'shitforbrains', 'shitfuck', 'shitfucker', 'shitfull', 'shithapens', 'shithappens', 'shithead', 'shithouse', 'shiting', 'shitlist', 'shitola', 'shitoutofluck', 'shits', 'shitstain', 'shitted', 'shitter', 'shitting', 'shitty ', 'shoot', 'shooting', 'shortfuck', 'sick', 'sissy', 'sixsixsix', 'sixtynine', 'sixtyniner', 'skank', 'skankfuck', 'skankwhore', 'skanky', 'skankywhore', 'skinflute', 'skum', 'skumbag', 'slant', 'slanteye', 'slapper', 'slaughter', 'slav', 'slave', 'slavedriver', 'sleezebag', 'sleezeball', 'slideitin', 'slime', 'slimeball', 'slimebucket', 'slopehead', 'slopey', 'slopy', 'slut', 'sluts', 'slutt', 'slutting', 'slutty', 'slutwear', 'slutwhore', 'smack', 'smackthemonkey', 'smut', 'snatchpatch', 'snigger', 'sniggered', 'sniggering', 'sniggers', 'sniper', 'snot', 'snowback', 'snownigger', 'sob', 'sodom', 'sodomise', 'sodomite', 'sodomize', 'sodomy', 'sooty', 'sos', 'soviet', 'spaghettibender', 'spaghettinigger', 'spank', 'spankthemonkey', 'sperm', 'spermacide', 'spermbag', 'spermhearder', 'spermherder', 'spic', 'spick', 'spig', 'spigotty', 'spik', 'spit', 'spitter', 'splittail', 'spooge', 'spreadeagle', 'spunk', 'spunky', 'squaw', 'stagg', 'stiffy', 'strapon', 'stringer', 'stripclub', 'stroke', 'stroking', 'stupid', 'stupidfuck', 'stupidfucker', 'suck', 'suckdick', 'sucker', 'suckme', 'suckmyass', 'suckmydick', 'suckmytit', 'suckoff', 'suicide', 'swallow', 'swallower', 'swalow', 'swastika', 'sweetness', 'syphilis', 'taboo', 'taff', 'tampon', 'tang', 'tantra', 'tarbaby', 'tard', 'teat', 'terror', 'terrorist', 'teste', 'testicle', 'testicles', 'thicklips', 'thirdeye', 'thirdleg', 'threesome', 'threeway', 'timbernigger', 'tinkle', 'tit', 'titfuck', 'titfucker', 'titfuckin', 'titjob', 'titlicker', 'titlover', 'tits', 'tittie', 'titties', 'titty', 'tnt', 'toilet', 'tongethruster', 'tongue', 'tonguethrust', 'tonguetramp', 'tortur', 'torture', 'tosser', 'towelhead', 'trailertrash', 'tramp', 'trannie', 'tranny', 'transexual', 'transsexual', 'transvestite', 'triplex', 'trisexual', 'trojan', 'trots', 'tuckahoe', 'tunneloflove', 'turd', 'turnon', 'twat', 'twink', 'twinkie', 'twobitwhore', 'uck', 'uk', 'unfuckable', 'upskirt', 'uptheass', 'upthebutt', 'urinary', 'urinate', 'urine', 'usama', 'uterus', 'vagina', 'vaginal', 'vatican', 'vibr', 'vibrater', 'vibrator', 'vietcong', 'violence', 'virgin', 'virginbreaker', 'vomit', 'vulva', 'wab', 'wank', 'wanker', 'wanking', 'waysted', 'weapon', 'weenie', 'weewee', 'welcher', 'wetb', 'wetback', 'wetspot', 'whacker', 'whash', 'whigger', 'whiskeydick', 'whiskydick', 'whit', 'whitenigger', 'whites', 'whitetrash', 'whitey', 'whiz', 'whop', 'whore', 'whorefucker', 'whorehouse'];
  suggestions = ['How are you?', 'What is your name?'];

  @ViewChild('skill', { static: false, read: ElementRef })
  skill: ElementRef<HTMLDivElement>;
  dotLoader: boolean;
  isSuggestion: boolean;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly matSnackBar: MatSnackBar,
  ) {
    this.mailForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/)]],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      let data = document.getElementById('profession');
      if (data) {
        data.classList.add('opacity1')
      }
    }, 400);

    document.addEventListener("scroll", (event) => {
      if (window.innerHeight > this.getDivPosition(this.skill.nativeElement).top) {
        for (let i = 0; i < this.profile.skills.length; i++) {
          let barAnime = document.getElementById('bar' + i);
          if (barAnime) {
            barAnime.classList.add('scale')
          }
        }
      }
    });
  }

  getDivPosition(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    const position = {
      top: rect.top,
      left: rect.left,
      bottom: rect.bottom,
      right: rect.right,
      width: rect.width,
      height: rect.height
    };
    return position;
  }

  ngOnInit(): void {

  }

  selectMenu(i: number) {
    for (const m of this.menuList) {
      Object.assign(m, { isSelect: false });
    }
    this.menuList[i].isSelect = true;
    this.scrollToPosition(this.menuList[i].htmlId);
  }

  openProject(url: string) {
    window.open(url, '_blank');
  }

  sendMessage() {
    if (this.mailForm.valid) {
      window.location.href = 'mailto:jothiraj281@gmail.com?subject=' + 'I am contacting throw your website' +
        '&body=' + `Hi, Im ${this.mailForm.get('name')?.value} ${this.mailForm.get('message')?.value} ,Please contact me on ${this.mailForm.get('mobile')?.value}`;
      this.mailForm.reset();
    } else {
      this.matSnackBar.open('Please fill all the inputs with proper details', '', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: 'alert'
      });
    }
  }

  downloadResume() {
    window.open(`https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/Joe_resume.pdf`, '_blank')
  }

  scrollToPosition(id: any) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  openChat() {
    this.isChat = this.isChat ? false : true;
  }

  getResponse(query: string) {
    const isAbusive = this.abusive.some((x: any) => query.toLowerCase().includes(x));
    if (isAbusive) {
      return of({ result: "Kindly, avoid using abusive word!" });
    }
    let response;
    switch (query.toLowerCase()) {
      case 'hi':
      case 'hello':
        response = 'Hi there, Im here to assist you. How can I help you?';
        break;
      case 'how are you?':
        response = 'I am just a bot, but I am functioning as expected! How can I assist you?';
        break;
      case 'what is your name?':
        response = 'I am your friendly chatbot!';
        break;
      case 'bye':
      case 'goodbye':
        response = 'Goodbye! Have a great day!';
        break;
      case 'love':
        response = "oops!, I can't love you back";
        break;
      default:
        response = 'Sorry, I did not understand that. Can you please rephrase?';
        break;
    }
    return of({ result: response });
  }

  sendText(data?: any): void {
    this.isSuggestion = false;
    if(data){
      this.suggestions = this.suggestions.filter(item => item !== data);
    }
    this.dotLoader = true;
    if (this.inputText.trim() !== '' || data) {
      this.messages.push({ user: 'You', text: (data ? data : this.inputText) });
      this.getResponse(data ? data : this.inputText).subscribe(res => {
        setTimeout(() => {
          this.dotLoader = false;
          this.messages.push({ user: 'Bot', text: res.result });
          this.isSuggestion = true;
        }, 2000);
      });
      this.inputText = '';
    }
  }
}
