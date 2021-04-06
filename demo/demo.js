var defaultTheme = getRandom(4);

var today = new Date();

var events = [ {
    id: "imwyx6S",
    name: "Event #A",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/18/" + today.getFullYear(),
    type: "event"
}, {
    id: "9jU6g6f",
    name: "Holiday #B",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/10/" + today.getFullYear(),
    type: "holiday"
}, {
    id: "0g5G6ja",
    name: "Event #C",
    description: "Lorem ipsum dolor sit amet.",
    date: [ today.getMonth() + 1 + "/2/" + today.getFullYear(), today.getMonth() + 1 + "/5/" + today.getFullYear() ],
    type: "event",
    everyYear: !0
}, {
    id: "y2u7UaF",
    name: "Holiday #D",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/23/" + today.getFullYear(),
    type: "holiday"
}, {
    id: "dsu7HUc",
    name: "Birthday #E",
    description: "Lorem ipsum dolor sit amet.",
    date: new Date(),
    type: "birthday"
}, {
    id: "dsu7HUc",
    name: "Birthday #F",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/27/" + today.getFullYear(),
    type: "birthday"
} ];

var active_events = [];

var week_date = [];

var curAdd, curRmv;

function getRandom(a) {
    return Math.floor(Math.random() * a);
}

function getWeeksInMonth(a, b) {
    var c = [], d = new Date(b, a, 1), e = new Date(b, a + 1, 0), f = e.getDate();
    var g = 1;
    var h = 7 - d.getDay();
    while (g <= f) {
        c.push({
            start: g,
            end: h
        });
        g = h + 1;
        h += 7;
        if (h > f) h = f;
    }
    return c;
}

week_date = getWeeksInMonth(today.getMonth(), today.getFullYear())[2];

$(document).ready(function() {
    $("#demoEvoCalendar").evoCalendar({
        format: "MM dd, yyyy",
        titleFormat: "MM",
        calendarEvents: [{

            id: "mi",
            name: "Miguel Rodríguez",
            description: "Hoy es su Cumpleaños !!, Miguel: Es un nombre que proviene del hebreo y que significa '¿Quién como Dios?'. Puede sorprender este significado al tratarse de una pregunta retórica, pero sería el equivalente a significar 'Dios es justo' o 'Nadie como Dios'.",
            date: "January/21/2021",
            type: "birthday",
            everyYear: !0
        }, {
            id: "wi",
            name: "William Solano",
            description: "Hoy es su Cumpleaños !!, William: Es un nombre voluntarioso o protector decidido, posee una naturaleza emotiva y que se manifiestan mediante una expresión artística, mediante las cosas del humor y del honor.",
            date: "February/11/2021",
            type: "birthday",
            everyYear: !0
        }, {
            id: "jo",
            name: "Josué Rodriguez",
            description: "Hoy es su Cumpleaños !!, Josué: Quiere decir «Yahvé el salvador» o bien «Yahvé salva» y es uno de los nombres con un significado más claro que existe, pues Josué fue el hombre que, según la historia bíblica, detuvo el sol en el siglo XVI a. C. Podríamos atrevernos a decir que es el nombre más documentado históricamente.",
            date: "March/09/2021",
            type: "birthday",
            everyYear: !0
        }, {
           id: "cr",
            name: "Cristian Sánchez",
            description: "Hoy es su Cumpleaños !!, Cristian: Significa «El hombre que sigue a Dios», este nombre proviene de la palabra del latín «Christianus”, esta palabra a su vez deriva del griego «Χριστιανός» que significa cristiano o Ungido.",
            date: "March/09/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "An",
            name: "Angela Solano",
            description: "Hoy es su Cumpleaños !!, Angela: Es la mensajera de Dios. Es la versión femenina de Ángel que significa «mensajero», el nombre de Ángela también se encuentra en latín, «ángelus», significa «enviada de Dios» y tiene su nacimiento en la biblia.",
            date: "April/09/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "el",
            name: "Elizabeth Reina",
            description: "Hoy es su Cumpleaños !!, Elizabeth: Es mujer amparada por Dios, este significado hace referencia a que es una mujer con la protección y ayuda de Dios. Es por eso que también podemos relacionarlo con otros significados parecidos, como «mujer a la que Dios da salud» o «mujer a la que Dios presta su ayuda».",
            date: "April/16/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "va",
            name: "Vanessa Solano",
            description: "Hoy es su Cumpleaños !!, Vanessa: Es un nombre femenino de origen latino que proviene de Vanities. Significa «la que tiene vanidad». Es muy comunicativa y aparenta superficialidad a la vez que reservada y discreta. De ahí que sea una mujer muy contradictoria que puede relacionarse con la gente o ausentarse para meditar y reflexionar.",
            date: "May/14/2021",
            type: "birthday",
            everyYear: !0
        },
        {
            id: "ne",
            name: "Néstor Rodríguez",
            description: "Hoy es su Cumpleaños !!, Néstor: Es un nombre propio masculino de origen griego. Significa «el que es recordado». Otros lo relacionan con el verbo griego Neomai, que significa «llegar a la meta», es decir, el que llega a su meta. Además, Néstor se llamaba el héroe heleno que luchó en la guerra de Troya y que salió a buscar el vellocino de oro.",
            date: "May/21/2021",
            type: "birthday",
            everyYear: !0
        },
        {
            id: "is",
            name: "Isabella Sánchez",
            description: "Hoy es su Cumpleaños !!, Isabella: Significa «Consagrada a Dios». Las mujeres llamadas Isabela son muy tiernas y agradables, su personalidad se caracteriza por poseer una dulzura especial, un espíritu de bondad y amabilidad que siempre tiene como objetivo ayudar a los demás.",
            date: "May/27/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "se",
            name: "Sebastián Solano",
            description: "Hoy es su Cumpleaños !!, Sebastián: Se relaciona con la honra, el respeto y la reverencia, las personas llamadas así acostumbran a ser conciliadoras, honradas y muy respetuosas. Así mismo, su sentido de la justicia está muy desarrollado y no es de extrañar que adopten la figura de moderador ante discusiones para llegar a un acuerdo entre ambas partes y lograr, así, la paz.",
            date: "May/29/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "jh",
            name: "Jhon Solano",
            description: "Hoy es su Cumpleaños !!, John: «Siervo de Dios» es uno de los significados que tiene este nombre, es muy popular en todo el mundo. Es de origen hebreo, por ello, también se le conocer como «lleno de gracia». Es una persona de pocas palabras cuando se trata de expresar a otras personas, es muy alegre y carismático. Puede ser algo exigente en el trabajo y eso lo hace muy exigente con el mismo, no tiene miedo a los problemas y puede tomar decisiones difíciles sin temor a nada.",
            date: "May/30/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "ela",
            name: "Elza Reina",
            description: "Hoy es su Cumpleaños !!, Elza: Es un nombre germánico de origen hebreo, variante de Elisa, que quiere decir «la que es ayudada por Dios» o «amada por Dios». tienen una personalidad fuerte y son muy valientes. Sin embargo, también son soñadoras y a veces pueden tener la cabeza llena de ideas que no siempre son las más viables, pero por las que les gusta luchar debido a su espíritu idealista. Su creatividad es una de las mejores cualidades que tienen.",
            date: "June/11/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "ja",
            name: "Jaime Solano",
            description: "Hoy es su Cumpleaños !!, Jaime: Proviene del hebreo y es una de las variantes del nombre bíblico de Jacob, que literalmente significa «sostenido por el talón» o «el que sustituye», son personas muy extrovertidas y vitalistas, se muestran normalmente alegres y son muy simpáticos con quienes les rodean, incluidos con aquellos que no conocen.",
            date: "June/23/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "je",
            name: "Yessica Castellanos",
            description: "Hoy es su Cumpleaños !!, Yessica: Se trata de un nombre propio femenino que deriva de la voz eslava «yisha», que se traduce por gracia de Dios, también es de origen hebreo que aparece en la Biblia, haciendo referencia a la existencia de Dios y su protección.",
            date: "June/27/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "an",
            name: "Andrea Reina",
            description: "Hoy es su Cumpleaños !!, Andrea:  Significa valiente y bella, carácter muy liberal y comprensivo, por ello, se ganan fácilmente la compañía de quienes les rodean. Son personas muy sociables, que adoran pasar tiempo con sus familiares, amigos o compañeros de trabajo, por ello, siempre es frecuente encontrarlas rodeadas de gente.",
            date: "June/29/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "and",
            name: "Andres Solano",
            description: "Hoy es su Cumpleaños !!, Andrés: Es un nombre masculino de origen griego cuyo significado es hombre valiente, fuerte, viril. El personaje famoso es San Andrés apóstol como uno de los discípulos de Jesucristo.",
            date: "July/15/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "sa",
            name: "Sara Solano",
            description: "Hoy es su Cumpleaños !!, Sara: Es nombre de origen hebreo, significa literalmente princesa, aunque son muchas las personas que defienden que también puede traducirse literalmente como «aquella que es sagrada», nombre de Sara aparece por primera vez en el libro del Génesis.",
            date: "July/18/2021",
            type: "birthday",
            everyYear: !0
        },
        {
            id: "da",
            name: "Daniel Solano",
            description: "Hoy es su Cumpleaños !!, Daniel: El nombre Daniel tiene un origen hebreo y bíblico. Viene de Dan: «juez o justicia» y el: abreviatura de Elohim, «Dios». Significa «Dios es mi juez», por lo general son personas amistosas, sensibles y justas. Le gusta rodearse de sus amistades, Daniel es fiable y generoso, Amante de su familia que siempre se preocupa por ellos y les atiende e intenta satisfacer a los demás incluso a costa de su propia satisfacción. Es generoso y necesita afecto para ser feliz por su gran sensibilidad.",
            date: "September/14/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "car",
            name: "Carolina Yepes",
            description: "Hoy es su Cumpleaños !!, Carolina: El nombre Carolina es de origen alemán, proviene de la palabra «karl» que significa «inteligencia», tienen un carácter fácil, aunque saben imponerse ante aquellas circunstancias desagradables o incómodas. Siempre lo tienen todo muy claro, saben de dónde vienen y hacia dónde van.",
            date: "September/22/2021",
            type: "birthday",
            everyYear: !0
        },
        {
            id: "salo",
            name: "Salome Rodríguez",
            description: "Hoy es su Cumpleaños !!, Salome: Nombre de origen hebreo que significa «que tiene paz». En la tradición bíblica era la esposa de Zebedeo y madre de los apóstoles Santiago y Juan. Salomé es tranquila, reservada, honesta, paciente, estable, pero introvertida y tímida. A veces se muestra insegura. No le gusta hacer demasiadas amistades ni llevar una vida superficial, prefiere la soledad. Es más práctica que intelectual y se apoya siempre en la lógica y el sentido común. Si a veces sueña, no tarda en regresar a la realidad.",
            date: "October/02/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "pa",
            name: "Paulo Córdoba",
            description: "Hoy es su Cumpleaños !!, Paulo: El nombre Paulo, al igual que Pablo, implica una personalidad reflexiva y rodeada de misterio con grandes dotes comunicativas y también intelectuales. Su capacidad de seducción radica en su simpatía y en su creatividad, siendo una persona con un gran ingenio y carisma. Además, Paulo tiene una gran capacidad de esfuerzo y su familia es una prioridad.",
            date: "October/09/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "mi",
            name: "Mirna Padrón",
            description: "Hoy es su Cumpleaños !!, Mirna: El nombre Mirna, de origen eslavo, se deriva de la voz «Мирна», y puede ser interpretado etimológicamente como «pacífica y gloriosa». Son personas que suelen proponerse metas difíciles de alcanzar. Son capaces de tomar decisiones rápidas y acertadas, tienen personalidad de líderes.",
            date: "October/25/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "ta",
            name: "Tatiana Yepes",
            description: "Hoy es su Cumpleaños !!, Tatiana: Nombre de mujer amante de la libertad, de la independencia, de personalidad muy fuerte la cual en muchas ocasiones no se percibe a primera vista, le gusta el trabajo en equipo, le encanta liderar los trabajos en grupos, le gusta comandar y tomar todas las decisiones con respecto a su pareja, lo que hace pensar que se trata de una persona egocéntrica y con pocas probabilidades de compartir sus sentimientos aun cuando se siente acorralada y lastimada, es una mujer encantadora, divertida, a la que le gusta llamar la atención.",
            date: "December/08/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "ya",
            name: "Yazmin Martinez",
            description: "Hoy es su Cumpleaños !!, Yazmin: Bella como la flor que lleva el mismo nombre. Posee una gran simpatía y una fructífera imaginación, le gusta la actuación, el arte y la danza. Es protectora para quienes necesitan de su ayuda, suelen ser Afortunadas, Alegres, Activas, Amables, Atentas.",
            date: "December/15/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "ab",
            name: "Abby Cordoba",
            description: "Hoy es su Cumpleaños !!, Abby: En hebreo es «alegría de mi padre», es una persona emotiva y cuidadosa, muy detallista a la que le gusta la seguridad y el sentirse realizada, le apasiona superar las metas autoimpuestas, además, es una persona observadora y curiosa a la que le gusta la novedad. Tiene un don especial con la administración, de ahí que se le den muy bien profesiones del tipo: corredora de bolsa, detective, investigadora, psicóloga.",
            date: "December/16/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "mat",
            name: "Mateo Solano",
            description: "Hoy es su Cumpleaños !!, Mateo: Es un nombre de niño que significa «don de Dios» o «regalo de Dios». Es uno de los nombres más importantes que aparecen en las sagradas escrituras: Mateo fue uno de los 12 apóstoles de Jesús y autor de uno de los cuatro evangelios. Mateo destaca por ser una persona muy afable, con un gran don de gentes, tiene una gran facilidad para hacer amigos y para mantener esta amistad en el tiempo, pues la gente le suele tener en alta estima y suele contar con él para todo.",
            date: "December/20/2021",
            type: "birthday",
            everyYear: !0
        },{
            id: "li",
            name: "Lina Solano",
            description: "Hoy es su Cumpleaños !!, Lina: Del griego lino o ungi, significa «Aquella que posee una gran cantidad de amigos», es una persona hábil en su trabajo y para las finanzas, audaz e impulsiva, prima en ella la audacia para defender sus ideales.",
            date: "December/22/2021",
            type: "birthday",
            everyYear: !0
        }
      ]
    });
    $("[data-set-theme]").click(function(b) {
        a(b.target);
    });
    $("#addBtn").click(function(a) {
        curAdd = getRandom(events.length);
        $("#demoEvoCalendar").evoCalendar("addCalendarEvent", events[curAdd]);
        active_events.push(events[curAdd]);
        events.splice(curAdd, 1);
        if (0 === events.length) a.target.disabled = !0;
        if (active_events.length > 0) $("#removeBtn").prop("disabled", !1);
    });
    $("#removeBtn").click(function(a) {
        curRmv = getRandom(active_events.length);
        $("#demoEvoCalendar").evoCalendar("removeCalendarEvent", active_events[curRmv].id);
        events.push(active_events[curRmv]);
        active_events.splice(curRmv, 1);
        if (0 === active_events.length) a.target.disabled = !0;
        if (events.length > 0) $("#addBtn").prop("disabled", !1);
    });
    a($("[data-set-theme]")[defaultTheme]);
    function a(a) {
        var b = a.dataset.setTheme;
        $("[data-set-theme]").removeClass("active");
        $(a).addClass("active");
        $("#demoEvoCalendar").evoCalendar("setTheme", b);
    }
    var b = getRandom($("[data-settings]").length);
    var c = $("[data-settings]")[b];
    var d = getRandom($("[data-method]").length);
    var e = $("[data-method]")[d];
    var f = getRandom($("[data-event]").length);
    var g = $("[data-event]")[f];
    showSettingsSample($(c).data().settings);
    showMethodSample($(e).data().method);
    showEventSample($(g).data().event);
    $("[data-settings]").on("click", function(a) {
        var b = $(a.target).closest("[data-settings]");
        var c = b.data().settings;
        showSettingsSample(c);
    });
    $("[data-method]").on("click", function(a) {
        var b = $(a.target).closest("[data-method]");
        var c = b.data().method;
        showMethodSample(c);
    });
    $("[data-event]").on("click", function(a) {
        var b = $(a.target).closest("[data-event]");
        var c = b.data().event;
        showEventSample(c);
    });
});

function showSettingsSample(a) {
    var b = $("#event-settings");
    var c;
    switch (a) {
      case "theme":
        c = '<br><span class="green">// theme</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'theme'</span>: <span class=\"red\">'Theme Name'</span><br>" + "});" + "<br> ";
        break;

      case "language":
        c = '<br><span class="green">// language</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'language'</span>: <span class=\"red\">'en'</span><br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// Supported language: en, es, de..</span><br>' + "});" + "<br> ";
        break;

      case "format":
        c = '<br><span class="green">// format</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'format'</span>: <span class=\"red\">'MM dd, yyyy'</span><br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// some browsers doesn\'t support other format, so...</span><br>' + "});" + "<br> ";
        break;

      case "titleFormat":
        c = '<br><span class="green">// titleFormat</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'titleFormat'</span>: <span class=\"red\">'MM'</span><br>" + "});" + "<br> ";
        break;

      case "eventHeaderFormat":
        c = '<br><span class="green">// eventHeaderFormat</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'eventHeaderFormat'</span>: <span class=\"red\">'MM dd'</span><br>" + "});" + "<br> ";
        break;

      case "firstDayOfWeek":
        c = '<br><span class="green">// firstDayOfWeek</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'firstDayOfWeek\'</span>: <span class="red">0</span> <span class="green">// Sun</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// 0-6 (Sun-Sat)</span><br>' + "});" + "<br> ";
        break;

      case "todayHighlight":
        c = '<br><span class="green">// todayHighlight</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'todayHighlight\'</span>: <span class="blue">true</span><br>' + "});" + "<br> ";
        break;

      case "sidebarDisplayDefault":
        c = '<br><span class="green">// sidebarDisplayDefault</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'sidebarDisplayDefault\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
        break;

      case "sidebarToggler":
        c = '<br><span class="green">// sidebarToggler</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'sidebarToggler\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
        break;

      case "eventDisplayDefault":
        c = '<br><span class="green">// eventDisplayDefault</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'eventDisplayDefault\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
        break;

      case "eventListToggler":
        c = '<br><span class="green">// eventListToggler</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'eventListToggler\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
        break;

      case "calendarEvents":
        c = '<br><span class="green">// calendarEvents</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'calendarEvents\'</span>, {<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'calendarEvents'</span>: [<br>" + "&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;{<br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'4hducye\'</span>, <span class="green">// Event\'s id (required, for removing event)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">description</span>: <span class="red">\'Lorem ipsum dolor sit amet..\'</span>, <span class="green">// Description of event (optional)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">badge</span>: <span class="red">\'1-day event\'</span>, <span class="green">// Event badge (optional)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="blue">new</span> <span class="yellow">Date</span>(), <span class="green">// Date of event</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'holiday\'</span>, <span class="green">// Type of event (event|holiday|birthday)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">color</span>: <span class="red">\'#63d867\'</span>, <span class="green">// Event custom color (optional)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">everyYear</span>: <span class="blue">true</span> <span class="green">// Event is every year (optional)</span><br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;}<br>" + "&#8194;&#8194;&#8194;&#8194;&#8194;]<br>" + "});" + "<br> ";
    }
    $("[data-settings]").removeClass("active");
    $('[data-settings="' + a + '"]').addClass("active");
    b.html(c);
}

function showMethodSample(a) {
    var b = $("#method-code");
    var c;
    switch (a) {
      case "setTheme":
        c = '<br><span class="green">// setTheme</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'setTheme\'</span>, <span class="red">\'Theme Name\'</span>);' + "<br> ";
        break;

      case "toggleSidebar":
        c = '<br><span class="green">// toggleSidebar</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleSidebar\'</span>);' + "<br> " + '<br><span class="green">// open sidebar</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleSidebar\'</span>, <span class="blue">true</span>);' + "<br> ";
        break;

      case "toggleEventList":
        c = '<br><span class="green">// toggleEventList</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleEventList\'</span>);' + "<br> " + '<br><span class="green">// close event list</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleEventList\'</span>, <span class="blue">false</span>);' + "<br> ";
        break;

      case "getActiveDate":
        c = '<br><span class="green">// getActiveDate</span><br>' + '<span class="red">var</span> <span class="orange">active_date</span> = $(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'getActiveDate\'</span>);' + "<br> ";
        break;

      case "getActiveEvents":
        c = '<br><span class="green">// getActiveEvents</span><br>' + '<span class="red">var</span> <span class="orange">active_events</span> = $(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'getActiveEvents\'</span>);' + "<br> ";
        break;

      case "selectYear":
        c = '<br><span class="green">// selectYear</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'selectYear\'</span>, <span class="red">2021</span>);' + "<br> ";
        break;

      case "selectMonth":
        c = '<br><span class="green">// selectMonth</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'selectMonth\'</span>, <span class="red">1</span>); <span class="green">// february</span>' + "<br> ";
        break;

      case "selectDate":
        c = '<br><span class="green">// selectDate</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'selectDate\'</span>, <span class="red">\'February 15, 2020\'</span>);' + "<br> ";
        break;

      case "addCalendarEvent":
        c = '<br><span class="green">// addCalendarEvent</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'addCalendarEvent\'</span>, {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'kNybja6\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">name</span>: <span class="red">\'Mom\\\'s Birthday\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">description</span>: <span class="red">\'Lorem ipsum dolor sit..\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="red">\'May 27, 2020\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'birthday\'</span><br>' + "});" + '<br><span class="green">// add multiple events</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'addCalendarEvent\'</span>, [<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;{<br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'kNybja6\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">name</span>: <span class="red">\'Mom\\\'s Birthday\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="red">\'May 27, 1965\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'birthday\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">everyYear</span>: <span class="blue">true</span> <span class="green">// optional</span><br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;},<br>" + "&#8194;&#8194;&#8194;&#8194;&#8194;{<br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'asDf87L\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">name</span>: <span class="red">\'Graduation Day!\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="red">\'March 21, 2020\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'event\'</span><br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;}<br>" + "]);" + "<br> ";
        break;

      case "removeCalendarEvent":
        c = '<br><span class="green">// removeCalendarEvent</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'removeCalendarEvent\'</span>, <span class="red">\'kNybja6\'</span>);' + "<br> " + '<br><span class="green">// delete multiple event</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'removeCalendarEvent\'</span>, [<span class="red">\'kNybja6\'</span>, <span class="red">\'asDf87L\'</span>]);' + "<br> ";
        break;

      case "destroy":
        c = '<br><span class="green">// destroy</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'destroy\'</span>);' + "<br> ";
    }
    $("[data-method]").removeClass("active");
    $('[data-method="' + a + '"]').addClass("active");
    b.html(c);
}

function showEventSample(a) {
    var b = $("#event-code");
    var c;
    switch (a) {
      case "selectDate":
        c = '<br><span class="green">// selectDate</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectDate\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">newDate</span>, <span class="yellow">oldDate</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
        break;

      case "selectEvent":
        c = '<br><span class="green">// selectEvent</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectEvent\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">activeEvent</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
        break;

      case "selectMonth":
        c = '<br><span class="green">// selectMonth</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectMonth\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">activeMonth</span>, <span class="yellow">monthIndex</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
        break;

      case "selectYear":
        c = '<br><span class="green">// selectYear</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectYear\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">activeYear</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
        break;

      case "destroy":
        c = '<br><span class="green">// destroy</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'destroy\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">evoCalendar</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
    }
    $("[data-event]").removeClass("active");
    $('[data-event="' + a + '"]').addClass("active");
    b.html(c);
}

$('[data-go*="#"]').on("click", function(a) {
    a.preventDefault();
    var b = $(this).data().go;
    if ("#top" === b) {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return;
    } else var c = $(b)[0].offsetTop - $("header")[0].offsetHeight - 10;
    $("html, body").animate({
        scrollTop: c
    }, 500);
});