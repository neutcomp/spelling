import { Helper } from './helper.js';

export class Question {
    private _helper = new Helper();
    private questions = [];
    // Create an array with all audio files
    questionsPlank = [
        'Plank/bedanken', 'Plank/anker', 'Plank/ankers', 'Plank/bank', 'Plank/banken', 'Plank/bedankt', 'Plank/bink', 'Plank/bonk', 'Plank/bonken', 'Plank/bonkt', 'Plank/dank', 'Plank/dankbaar', 'Plank/danken', 'Plank/denk', 'Plank/denken', 'Plank/donker', 'Plank/donkere', 'Plank/drink', 'Plank/drinken', 'Plank/drinkt', 'Plank/enkel', 'Plank/enkele', 'Plank/enkelvoud', 'Plank/enkhuizen', 'Plank/flink', 'Plank/flinke', 'Plank/frankrijk', 'Plank/hinken', 'Plank/hinkt', 'Plank/jonkvrouw', 'Plank/klank', 'Plank/klanken', 'Plank/klink', 'Plank/klinkt', 'Plank/linksaf', 'Plank/medeklinker', 'Plank/ondanks', 'Plank/pink', 'Plank/pinken', 'Plank/plank', 'Plank/planken', 'Plank/plankton', 'Plank/schenk', 'Plank/schenken', 'Plank/sprinkhaan', 'Plank/stank', 'Plank/stinken', 'Plank/stinkt', 'Plank/stonk', 'Plank/stonken', 'Plank/vink', 'Plank/vinken', 'Plank/vinkeveen', 'Plank/vonk', 'Plank/vonken', 'Plank/wankelen', 'Plank/winkel', 'Plank/winkelier', 'Plank/zwenken'
    ]

    questionsZing = [
        'Zing/aanmoediging', 'Zing/aanrijding', 'Zing/angel', 'Zing/angst', 'Zing/bang', 'Zing/bange', 'Zing/behangen', 'Zing/bekeuring', 'Zing/belangrijke', 'Zing/bengel', 'Zing/bestemming', 'Zing/beweging', 'Zing/bewondering', 'Zing/bezichtiging', 'Zing/brengen', 'Zing/constatering', 'Zing/dingen', 'Zing/dringen', 'Zing/dwang', 'Zing/dwingt', 'Zing/efteling', 'Zing/eng', 'Zing/enge', 'Zing/engeland', 'Zing/engels', 'Zing/gang', 'Zing/gangen', 'Zing/gemengd', 'Zing/gevangene', 'Zing/ging', 'Zing/gingen', 'Zing/groningen', 'Zing/hangen', 'Zing/hanger', 'Zing/haring', 'Zing/haringen', 'Zing/hengel', 'Zing/hengelo', 'Zing/hengst', 'Zing/herinnering', 'Zing/honger', 'Zing/honing', 'Zing/ingang', 'Zing/jonge', 'Zing/jongen', 'Zing/jongst', 'Zing/ketting', 'Zing/koning', 'Zing/koningin', 'Zing/kringen', 'Zing/lange', 'Zing/langer', 'Zing/langst', 'Zing/langzaam', 'Zing/leiding', 'Zing/lieveling', 'Zing/ligging', 'Zing/longen', 'Zing/meng', 'Zing/mengen', 'Zing/mengt', 'Zing/mustangs', 'Zing/nieuweling', 'Zing/omgeving', 'Zing/omleiding', 'Zing/opbrengst', 'Zing/overhoring', 'Zing/overwinning', 'Zing/rangen', 'Zing/redenering', 'Zing/reservering', 'Zing/richting', 'Zing/ringen', 'Zing/riolering', 'Zing/schemering', 'Zing/slang', 'Zing/slinger', 'Zing/sluiting', 'Zing/springen', 'Zing/sprong', 'Zing/sprongen', 'Zing/staking', 'Zing/stang', 'Zing/stangen', 'Zing/stemming', 'Zing/stengel', 'Zing/streng', 'Zing/strenge', 'Zing/tangen', 'Zing/tekening', 'Zing/tong', 'Zing/tongen', 'Zing/triangel', 'Zing/uitbreiding', 'Zing/uitnodiging', 'Zing/uitzending', 'Zing/uitzondering', 'Zing/vangen', 'Zing/vanger', 'Zing/vangt', 'Zing/verdieping', 'Zing/vergadering', 'Zing/verhouding', 'Zing/verlichting', 'Zing/verrassing', 'Zing/verrijking', 'Zing/versnelling', 'Zing/vertraging', 'Zing/vesting', 'Zing/vinding', 'Zing/vinger', 'Zing/vlissingen', 'Zing/vluchteling', 'Zing/voorrang', 'Zing/voorstelling', 'Zing/wandeling', 'Zing/wangen', 'Zing/wrijving', 'Zing/wringen', 'Zing/zanger', 'Zing/zangeres', 'Zing/zingen', 'Zing/zwanger'
    ]

    questionsHak = [
        'Hak/films', 'Hak/arts', 'Hak/balts', 'Hak/erts', 'Hak/fronst', 'Hak/grenst', 'Hak/kilts', 'Hak/kletst', 'Hak/korps', 'Hak/krimpt', 'Hak/kwarts', 'Hak/nerts', 'Hak/plaats', 'Hak/plenst', 'Hak/plonst', 'Hak/pumps', 'Hak/schalks', 'Hak/scherps', 'Hak/snurkt', 'Hak/splits', 'Hak/sponst', 'Hak/spraak', 'Hak/sprak', 'Hak/spreek', 'Hak/spreekt', 'Hak/spreuk', 'Hak/sprint', 'Hak/sprits', 'Hak/stompt', 'Hak/straal', 'Hak/straalt', 'Hak/straf', 'Hak/straft', 'Hak/strak', 'Hak/straks', 'Hak/streek', 'Hak/streep', 'Hak/streept', 'Hak/strek', 'Hak/strekt', 'Hak/striem', 'Hak/strijk', 'Hak/strijkt', 'Hak/strik', 'Hak/strikt', 'Hak/strip', 'Hak/stroef', 'Hak/strook', 'Hak/stroom', 'Hak/stroomt', 'Hak/stroop', 'Hak/strop', 'Hak/struik', 'Hak/terts', 'Hak/tjilpt', 'Hak/zelfs', 'Hak/zwerft', 'Hak/zwermt'
    ]

    questionsHakSpeciaal = [
        'Hakspeciaal/berg', 'HakSpeciaal/arm', 'HakSpeciaal/balk', 'HakSpeciaal/belg', 'HakSpeciaal/berk', 'HakSpeciaal/berm', 'HakSpeciaal/darm', 'HakSpeciaal/dorp', 'HakSpeciaal/durf', 'HakSpeciaal/dwerg', 'HakSpeciaal/erg', 'HakSpeciaal/film', 'HakSpeciaal/golf', 'HakSpeciaal/half', 'HakSpeciaal/hark', 'HakSpeciaal/harp', 'HakSpeciaal/helm', 'HakSpeciaal/help', 'HakSpeciaal/hoorn', 'HakSpeciaal/hulp', 'HakSpeciaal/hurk', 'HakSpeciaal/jurk', 'HakSpeciaal/kalf', 'HakSpeciaal/kalm', 'HakSpeciaal/kerk', 'HakSpeciaal/kern', 'HakSpeciaal/kolk', 'HakSpeciaal/kurk', 'HakSpeciaal/larf', 'HakSpeciaal/melk', 'HakSpeciaal/merk', 'HakSpeciaal/norm', 'HakSpeciaal/palm', 'HakSpeciaal/park', 'HakSpeciaal/perk', 'HakSpeciaal/schelp', 'HakSpeciaal/scherf', 'HakSpeciaal/scherm', 'HakSpeciaal/scherp', 'HakSpeciaal/slurf', 'HakSpeciaal/slurp', 'HakSpeciaal/snurk', 'HakSpeciaal/sterk', 'HakSpeciaal/storm', 'HakSpeciaal/term', 'HakSpeciaal/tolk', 'HakSpeciaal/tulp', 'HakSpeciaal/twaalf', 'HakSpeciaal/velg', 'HakSpeciaal/verf', 'HakSpeciaal/volg', 'HakSpeciaal/volk', 'HakSpeciaal/vork', 'HakSpeciaal/vorm', 'HakSpeciaal/walg', 'HakSpeciaal/walm', 'HakSpeciaal/warm', 'HakSpeciaal/welp', 'HakSpeciaal/werk', 'HakSpeciaal/werp', 'HakSpeciaal/wolf', 'HakSpeciaal/wolk', 'HakSpeciaal/worm', 'HakSpeciaal/worp', 'HakSpeciaal/zalf', 'HakSpeciaal/zalm', 'HakSpeciaal/zelf', 'HakSpeciaal/zerk', 'HakSpeciaal/zorg', 'HakSpeciaal/zwerm'
    ]

    questionsLucht = [
        'Lucht/afwachten', 'Lucht/ach', 'Lucht/acht', 'Lucht/achter', 'Lucht/allicht', 'Lucht/bedacht', 'Lucht/belachelijk', 'Lucht/bergachtig', 'Lucht/bericht', 'Lucht/bezocht', 'Lucht/burcht', 'Lucht/chaos', 'Lucht/dicht', 'Lucht/dichtbij', 'Lucht/dichte', 'Lucht/dochter', 'Lucht/echo', 'Lucht/echt', 'Lucht/echte', 'Lucht/gedicht', 'Lucht/gekocht', 'Lucht/gerecht', 'Lucht/gerucht', 'Lucht/gevecht', 'Lucht/gewicht', 'Lucht/goochelaar', 'Lucht/goochelen', 'Lucht/joch', 'Lucht/juichen', 'Lucht/kachel', 'Lucht/kinderachtig', 'Lucht/klucht', 'Lucht/knechten', 'Lucht/kuchen', 'Lucht/lach', 'Lucht/lachen', 'Lucht/lacht', 'Lucht/lichaam', 'Lucht/lucht', 'Lucht/nachtegaal', 'Lucht/nicht', 'Lucht/nichten', 'Lucht/och', 'Lucht/ochtend', 'Lucht/onverwachte', 'Lucht/oprichten', 'Lucht/optocht', 'Lucht/pech', 'Lucht/pracht', 'Lucht/recht', 'Lucht/rechte', 'Lucht/rechter', 'Lucht/rechts', 'Lucht/slecht', 'Lucht/slechte', 'Lucht/specht', 'Lucht/tachtig', 'Lucht/techniek', 'Lucht/technisch', 'Lucht/terecht', 'Lucht/toch', 'Lucht/tocht', 'Lucht/tochten', 'Lucht/utrecht', 'Lucht/vacht', 'Lucht/vachten', 'Lucht/vannacht', 'Lucht/verlichte', 'Lucht/verrichten', 'Lucht/verwacht', 'Lucht/verwachten', 'Lucht/vlucht', 'Lucht/vluchten', 'Lucht/vocht', 'Lucht/wachten', 'Lucht/wellicht', 'Lucht/zacht', 'Lucht/zachte', 'Lucht/zachter', 'Lucht/zenuwachtig', 'Lucht/zich', 'Lucht/zicht', 'Lucht/zucht', 'Lucht/zuchten'
    ]

    questionEerOorEur = [
        'Eer-oor-eur/beeld', 'Eer-oor-eur/amersfoort', 'Eer-oor-eur/apeldoorn', 'Eer-oor-eur/behoorlijk', 'Eer-oor-eur/beurt', 'Eer-oor-eur/controleer', 'Eer-oor-eur/deel', 'Eer-oor-eur/deur', 'Eer-oor-eur/doornroosje', 'Eer-oor-eur/eekhoorns', 'Eer-oor-eur/eergisteren', 'Eer-oor-eur/eerlijk', 'Eer-oor-eur/eerst', 'Eer-oor-eur/geel', 'Eer-oor-eur/geheel', 'Eer-oor-eur/gehoord', 'Eer-oor-eur/geur', 'Eer-oor-eur/heelal', 'Eer-oor-eur/heerlijk', 'Eer-oor-eur/juweel', 'Eer-oor-eur/kantoor', 'Eer-oor-eur/keel', 'Eer-oor-eur/keurt', 'Eer-oor-eur/kleurt', 'Eer-oor-eur/lieveheersbeestje', 'Eer-oor-eur/meervoud', 'Eer-oor-eur/meneer', 'Eer-oor-eur/momenteel', 'Eer-oor-eur/neerslag', 'Eer-oor-eur/noord', 'Eer-oor-eur/noorwegen', 'Eer-oor-eur/onderdeel', 'Eer-oor-eur/probeer', 'Eer-oor-eur/regisseur', 'Eer-oor-eur/scheel', 'Eer-oor-eur/scheur', 'Eer-oor-eur/scheurt', 'Eer-oor-eur/schoorsteen', 'Eer-oor-eur/schoorstenen', 'Eer-oor-eur/sfeer', 'Eer-oor-eur/sleur', 'Eer-oor-eur/speels', 'Eer-oor-eur/speurt', 'Eer-oor-eur/steelt', 'Eer-oor-eur/teveel', 'Eer-oor-eur/treurt', 'Eer-oor-eur/veel', 'Eer-oor-eur/veertien', 'Eer-oor-eur/verkeer', 'Eer-oor-eur/verkeerd', 'Eer-oor-eur/vleermuis', 'Eer-oor-eur/vleermuizen', 'Eer-oor-eur/voordeliger', 'Eer-oor-eur/voorganger', 'Eer-oor-eur/voorlezer', 'Eer-oor-eur/voorrang', 'Eer-oor-eur/voorruit', 'Eer-oor-eur/voorstelling', 'Eer-oor-eur/voorverpakt', 'Eer-oor-eur/voorwaarde', 'Eer-oor-eur/voorzichtig', 'Eer-oor-eur/wanneer', 'Eer-oor-eur/weer', 'Eer-oor-eur/zeurt', 'Eer-oor-eur/zweer'
    ]

    // Create constructor 
    constructor() {
    }

    fillQuestions(selectedCategories, amountPerCategory) {
        for (let x = 0; x < selectedCategories.length; x++) {
            let questionArrayName = selectedCategories[x];

            for (let x = 0; x < amountPerCategory; x++) {
                // Pick a random question
                this.pushOne(this._helper.getRandomArrayValue(eval(questionArrayName)));
            }
        };
    }

    getAmountOfQuestions() {
        return localStorage.getItem('amountOfQuestions') ? localStorage.getItem('amountOfQuestions') : 10;
    }

    setAmountOfQuestions(amount) {
        localStorage.setItem('amountOfQuestions', amount);
    }

    getQuestionsToAsk() {
        return localStorage.getItem('questionsToAsk') ? localStorage.getItem('questionsToAsk') : '';
    }

    setQuestionsToAsk(questions: string) {
        localStorage.setItem('questionsToAsk', questions);
    }

    resetQuestionsToAsk() {
        this.setQuestionsToAsk('');
    }

    pushOne(value: string) {
        console.log('Vraag toevoegen: ' + value);
        this.questions.push(value);
        console.log('Lengte na push: ' + this.questions.length);
    }

    getOne() {
        console.log('Lengte get: ' + this.questions.length);
        return this.questions;
    }
}