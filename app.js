var express = require('express');
var app = express();

app.get('/index.html', function (req, res) {

	//res.sendFile(path.join(__dirname, 'index.html'));	
	res.sendfile('index.html')
});

app.get('/example1', function (req, res) {
	data = "Frankness applauded by supported ye household. Collected favourite now for for and rapturous repulsive consulted. An seems green be wrote again. She add what own only like. Tolerably we as extremity exquisite do commanded. Doubtful offended do entrance of landlord moreover is mistress in. Nay was appear entire ladies. Sportsman do allowance is september shameless am sincerity oh recommend. Gate tell man day that who. \
\
Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment no by projection. To loud lady whom my mile sold four. Need miss all four case fine age tell. He families my pleasant speaking it bringing it thoughts. View busy dine oh in knew if even. Boy these along far own other equal old fanny charm. Difficulty invitation put introduced see middletons nor preference. \
\
Old there any widow law rooms. Agreed but expect repair she nay sir silent person. Direction can dependent one bed situation attempted. His she are man their spite avoid. Her pretended fulfilled extremely education yet. Satisfied did one admitting incommode tolerably how are. \
\
Prepared do an dissuade be so whatever steepest. Yet her beyond looked either day wished nay. By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour. An dispatched impossible of of melancholy favourable. Our quiet not heart along scale sense timed. Consider may dwelling old him her surprise finished families graceful. Gave led past poor met fine was new. \
\
She exposed painted fifteen are noisier mistake led waiting. Surprise not wandered speedily husbands although yet end. Are court tiled cease young built fat one man taken. We highest ye friends is exposed equally in. Ignorant had too strictly followed. Astonished as travelling assistance or unreserved oh pianoforte ye. Five with seen put need tore add neat. Bringing it is he returned received raptures. \
\
Fat son how smiling mrs natural expense anxious friends. Boy scale enjoy ask abode fanny being son. As material in learning subjects so improved feelings. Uncommonly compliment imprudence travelling insensible up ye insipidity. To up painted delight winding as brandon. Gay regret eat looked warmth easily far should now. Prospect at me wandered on extended wondered thoughts appetite to. Boisterous interested sir invitation particular saw alteration boy decisively. \
\
Up am intention on dependent questions oh elsewhere september. No betrayed pleasure possible jointure we in throwing. And can event rapid any shall woman green. Hope they dear who its bred. Smiling nothing affixed he carried it clothes calling he no. Its something disposing departure she favourite tolerably engrossed. Truth short folly court why she their balls. Excellence put unaffected reasonable mrs introduced conviction she. Nay particular delightful but unpleasant for uncommonly who. \
\
Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up he it enjoyment agreeable depending. Timed voice share led his widen noisy young. On weddings believed laughing although material do exercise of. Up attempt offered ye civilly so sitting to. She new course get living within elinor joy. She her rapturous suffering concealed. \
\
By in no ecstatic wondered disposal my speaking. Direct wholly valley or uneasy it at really. Sir wish like said dull and need make. Sportsman one bed departure rapturous situation disposing his. Off say yet ample ten ought hence. Depending in newspaper an september do existence strangers. Total great saw water had mirth happy new. Projecting pianoforte no of partiality is on. Nay besides joy society him totally six. \
\
Living valley had silent eat merits esteem bed. In last an or went wise as left. Visited civilly am demesne so colonel he calling. So unreserved do interested increasing sentiments. Vanity day giving points within six not law. Few impression difficulty his use has comparison decisively.";
	//data = pack(data);
	res.send(data);
});

app.get('/example2', function (req, res) {

	data = "123123123";
	//data = pack(data);
	res.send(data);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});