(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{335:function(e,a,s){"use strict";s.r(a);var t=s(14),n=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemon"}},[e._v("#")]),e._v(" Démon ")]),e._v(" "),a("p",[e._v("Dans cette section, nous décrirons comment les nœuds IBax interagissent les uns avec les autres d'un point de vue technique.")]),e._v(" "),a("h2",{attrs:{id:"about-the-server-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-the-server-daemon"}},[e._v("#")]),e._v(" À propos du démon du serveur ")]),e._v(" "),a("p",[e._v("Le démon du serveur doit s'exécuter sur chaque nœud du réseau, ce qui exécute diverses fonctions de serveur et prend en charge le protocole de blockchain d'IBax. Dans le réseau de blockchain, le démon distribue les blocs et les transactions, génère de nouveaux blocs, vérifie les blocs et les transactions reçus, et il peut éviter le problème de fork.")]),e._v(" "),a("h3",{attrs:{id:"honor-node-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#honor-node-daemon"}},[e._v("#")]),e._v(" Démon du nœud d'honneur ")]),e._v(" "),a("p",[e._v("Un nœud d'honneur exécute les démons de serveur suivants :")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"#blockgenerator-daemon"}},[e._v("démon BlockGenerator")])]),e._v(" "),a("p",[e._v("Génération de nouveaux blocs.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("démon BlockCollection")])]),e._v(" "),a("p",[e._v("Téléchargement de nouveaux blocs à partir d'autres nœuds.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#confirmations-daemon"}},[e._v("démon Confirmations")])]),e._v(" "),a("p",[e._v("Confirmer que les blocs sur le nœud existent également sur la plupart des autres nœuds.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#disseminator-daemon"}},[e._v("démon Disseminator")])]),e._v(" "),a("p",[e._v("Distribution des transactions et des blocs vers d'autres nœuds honneurs.")])]),e._v(" "),a("li",[a("p",[e._v("QueueParserBlocks démon")]),e._v(" "),a("p",[e._v("Blocs dans la file d'attente, qui contient des blocs provenant d'autres nœuds.")]),e._v(" "),a("p",[e._v("La logique de traitement des blocs est la même que celle du démon "),a("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("démon BlockCollection")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("QueueParserTx démon")]),e._v(" "),a("p",[e._v("Vérification des transactions en attente.")])]),e._v(" "),a("li",[a("p",[e._v("Scheduler démon")]),e._v(" "),a("p",[e._v("Exécution des contrats selon le planning prévu.")])])]),e._v(" "),a("h3",{attrs:{id:"guardian-node-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guardian-node-daemon"}},[e._v("#")]),e._v(" Démon du nœud gardien ")]),e._v(" "),a("p",[e._v("Un nœud gardien exécute les démons de serveur suivants :")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("démon BlockCollection")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#confirmations-daemon"}},[e._v("démon Confirmations")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#disseminator-daemon"}},[e._v("démon Disseminator")])]),e._v(" "),a("li",[e._v("QueueParserTx")]),e._v(" "),a("li",[e._v("Scheduler")])]),e._v(" "),a("h2",{attrs:{id:"blockcollection-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockcollection-daemon"}},[e._v("#")]),e._v(" Démon BlockCollection ")]),e._v(" "),a("p",[e._v("Ce démon télécharge des blocs et synchronise la blockchain avec d'autres nœuds du réseau.")]),e._v(" "),a("h3",{attrs:{id:"blockchain-synchronization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-synchronization"}},[e._v("#")]),e._v(" Synchronisation de la blockchain ")]),e._v(" "),a("p",[e._v("Ce démon synchronise la blockchain en déterminant la hauteur maximale du bloc dans le réseau de la blockchain, en demandant de nouveaux blocs et en résolvant le problème de la fourche dans la blockchain.")]),e._v(" "),a("h4",{attrs:{id:"check-for-blockchain-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-for-blockchain-updates"}},[e._v("#")]),e._v(" Vérifiez les mises à jour de la blockchain ")]),e._v(" "),a("p",[e._v("Ce démon envoie des requêtes de l'ID de bloc actuel à tous les nœuds honorés.")]),e._v(" "),a("p",[e._v("Si l'ID de bloc actuel du nœud exécutant le démon est inférieur à l'ID de bloc actuel de n'importe quel nœud honoré, le nœud du réseau blockchain est considéré comme obsolète.")]),e._v(" "),a("h4",{attrs:{id:"download-new-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-new-blocks"}},[e._v("#")]),e._v(" Télécharger les nouveaux blocs ")]),e._v(" "),a("p",[e._v("Le nœud qui renvoie la hauteur de bloc la plus élevée actuelle est considéré comme le dernier nœud.\nLe démon télécharge tous les blocs inconnus.")]),e._v(" "),a("h4",{attrs:{id:"solving-the-fork-issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solving-the-fork-issue"}},[e._v("#")]),e._v(" Résoudre le problème de la fourche ")]),e._v(" "),a("p",[e._v("Si une fourchette est détectée dans la blockchain, le démon déplace la fourchette en arrière en téléchargeant tous les blocs jusqu'à un bloc parent commun.\nLorsque le bloc parent commun est trouvé, un retour en arrière de la blockchain est effectué sur le nœud exécutant le démon, et le bloc correct est ajouté à la blockchain jusqu'à ce que le dernier soit inclus.")]),e._v(" "),a("h3",{attrs:{id:"tables-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables-1"}},[e._v("#")]),e._v(" Table de données ")]),e._v(" "),a("p",[e._v("Le démon BlocksCollection utilise les tables suivantes :")]),e._v(" "),a("ul",[a("li",[e._v("block_chain")]),e._v(" "),a("li",[e._v("transactions")]),e._v(" "),a("li",[e._v("transactions_status")]),e._v(" "),a("li",[e._v("info_block")])]),e._v(" "),a("h3",{attrs:{id:"request-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-1"}},[e._v("#")]),e._v(" Demande ")]),e._v(" "),a("p",[e._v("Le démon BlockCollection envoie les requêtes suivantes aux autres démons :")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#type-10"}},[e._v("Type 10")]),e._v(" pointe vers l'identifiant de bloc le plus grand parmi tous les nœuds honorés.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#type-7"}},[e._v("Type 7")]),e._v(" pointe vers les données avec l'identifiant de bloc le plus grand.")])]),e._v(" "),a("h2",{attrs:{id:"blockgenerator-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockgenerator-daemon"}},[e._v("#")]),e._v(" Le démon BlockGenerator{#blockgenerator-daemon}")]),e._v(" "),a("p",[e._v("Le démon BlockGenerator génère de nouveaux blocs.")]),e._v(" "),a("h3",{attrs:{id:"pre-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-verification"}},[e._v("#")]),e._v(" Pré-vérification ")]),e._v(" "),a("p",[e._v("Le démon BlockGenerator analyse les derniers blocs de la blockchain pour créer de nouveaux plans de génération de blocs.")]),e._v(" "),a("p",[e._v("Si les conditions suivantes sont remplies, un nouveau bloc peut être généré :")]),e._v(" "),a("ul",[a("li",[e._v("Le nœud qui a généré le dernier bloc se trouve dans un nœud de la liste d'honneur et exécute le démon.")]),e._v(" "),a("li",[e._v("Le laps de temps le plus court depuis la génération du dernier bloc non vérifié.")])]),e._v(" "),a("h3",{attrs:{id:"block-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-generation"}},[e._v("#")]),e._v(" Génération de blocs ")]),e._v(" "),a("p",[e._v("Un nouveau bloc généré par le démon contient toutes les nouvelles transactions, qui peuvent être reçues du "),a("a",{attrs:{href:"#disseminator-daemon"}},[e._v("démon Disseminator")]),e._v(" d'autres nœuds ou générées par le nœud exécutant le démon. Le bloc généré est stocké dans la base de données du nœud.")]),e._v(" "),a("h3",{attrs:{id:"tables-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables-2"}},[e._v("#")]),e._v(" Table de données ")]),e._v(" "),a("p",[e._v("Le démon BlockGenerator utilise les tables suivantes :")]),e._v(" "),a("ul",[a("li",[e._v("block_chain (saves new blocks)")]),e._v(" "),a("li",[e._v("transactions")]),e._v(" "),a("li",[e._v("transactions_status")]),e._v(" "),a("li",[e._v("info_block")])]),e._v(" "),a("h3",{attrs:{id:"request-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[e._v("#")]),e._v(" Demande ")]),e._v(" "),a("p",[e._v("Le démon BlockGenerator ne fait aucune demande aux autres démons.")]),e._v(" "),a("h2",{attrs:{id:"disseminator-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disseminator-daemon"}},[e._v("#")]),e._v(" Démon Disseminator ")]),e._v(" "),a("p",[e._v("Le démon Disseminator envoie des transactions et des blocs à tous les nœuds honorés.")]),e._v(" "),a("h3",{attrs:{id:"guardian-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guardian-node"}},[e._v("#")]),e._v(" Nœud gardien ")]),e._v(" "),a("p",[e._v("Lorsque vous travaillez sur un nœud gardien, le démon envoie les transactions générées par son nœud à tous les nœuds honorables.")]),e._v(" "),a("h3",{attrs:{id:"honor-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#honor-node"}},[e._v("#")]),e._v(" Nœud d'honneur{#honor-node}")]),e._v(" "),a("p",[e._v("Lorsqu'il travaille sur un nœud d'honneur, le démon envoie les blocs générés et les hachages de transaction à tous les nœuds d'honneur.")]),e._v(" "),a("p",[e._v("Ensuite, le nœud d'honneur répond aux demandes de transaction qui lui sont inconnues. Le démon envoie les données de transaction complètes en réponse.")]),e._v(" "),a("h3",{attrs:{id:"tables-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables-3"}},[e._v("#")]),e._v(" Table de données ")]),e._v(" "),a("p",[e._v("Le démon Disseminator utilise les tables suivantes :")]),e._v(" "),a("ul",[a("li",[e._v("transactions")])]),e._v(" "),a("h3",{attrs:{id:"request-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[e._v("#")]),e._v(" Demande ")]),e._v(" "),a("p",[e._v("Le démon Disseminator envoie les demandes suivantes à d'autres démons :")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#type-1"}},[e._v("Type 1")]),e._v(" Envoyer des transactions et des hachages de bloc à l'hôte honor.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#type-2"}},[e._v("Type 2")]),e._v(" Recevoir des données de transaction de l'hôte honor.")])]),e._v(" "),a("h2",{attrs:{id:"confirmations-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#confirmations-daemon"}},[e._v("#")]),e._v(" Démon de confirmations ")]),e._v(" "),a("p",[e._v("Le démon de confirmation vérifie si tous les blocs de son nœud existent sur la plupart des autres nœuds.")]),e._v(" "),a("h3",{attrs:{id:"block-confirmation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-confirmation"}},[e._v("#")]),e._v(" Confirmation de bloc ")]),e._v(" "),a("p",[e._v("Un bloc confirmé par plusieurs nœuds dans le réseau est considéré comme un bloc confirmé.")]),e._v(" "),a("p",[e._v("Le démon confirme tous les blocs un par un, en commençant par le premier qui n'est pas encore confirmé dans la base de données.")]),e._v(" "),a("p",[e._v("Chaque bloc est confirmé de la manière suivante :")]),e._v(" "),a("ul",[a("li",[e._v("En envoyant une demande contenant l'ID du bloc en cours de confirmation à tous les nœuds honorés.")]),e._v(" "),a("li",[e._v("Tous les nœuds honorés répondent avec le hachage du bloc.")]),e._v(" "),a("li",[e._v("Si le hachage renvoyé correspond au hachage du bloc sur le nœud du démon, la valeur du compteur de confirmation est augmentée. Sinon, la valeur du compteur d'annulation est augmentée.")])]),e._v(" "),a("h3",{attrs:{id:"tables-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables-4"}},[e._v("#")]),e._v(" Table de données ")]),e._v(" "),a("p",[e._v("Le démon de confirmation utilise les tables suivantes :")]),e._v(" "),a("ul",[a("li",[e._v("confirmation")]),e._v(" "),a("li",[e._v("info_block")])]),e._v(" "),a("h3",{attrs:{id:"request-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-4"}},[e._v("#")]),e._v(" Demande ")]),e._v(" "),a("p",[e._v("Le démon de confirmation envoie les demandes suivantes aux autres démons :")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#type-4"}},[e._v("Type 4")]),e._v(" Demande les hachages des blocs à partir du nœud d'honneur.")])]),e._v(" "),a("h2",{attrs:{id:"tcp-service-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-service-protocol"}},[e._v("#")]),e._v(" Protocole de service TCP ")]),e._v(" "),a("p",[e._v("Le protocole de service TCP fonctionne sur des nœuds honorables et des nœuds gardiens, qui utilisent le protocole binaire sur TCP pour les demandes des démons BlocksCollection, Disseminator et Confirmation.")]),e._v(" "),a("h2",{attrs:{id:"request-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-type"}},[e._v("#")]),e._v(" Type de demande ")]),e._v(" "),a("p",[e._v("Chaque demande a un type défini par les deux premiers octets de la demande.")]),e._v(" "),a("h3",{attrs:{id:"type-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-1"}},[e._v("#")]),e._v(" Type 1 ")]),e._v(" "),a("h1",{attrs:{id:"request-sender-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-1"}},[e._v("#")]),e._v(" ### Demandeur de l'envoi ")]),e._v(" "),a("p",[e._v("Cette demande est envoyée par le "),a("a",{attrs:{href:"#disseminator-daemon"}},[e._v("démon Disseminator")]),e._v(".")]),e._v(" "),a("h1",{attrs:{id:"request-data-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-data-1"}},[e._v("#")]),e._v(" ### D'accord, je vais demander les données. ")]),e._v(" "),a("p",[e._v("Hachages de la transaction et du bloc.")]),e._v(" "),a("h1",{attrs:{id:"request-processing-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-processing-1"}},[e._v("#")]),e._v(" ### Traitement de la demande ")]),e._v(" "),a("p",[e._v("Le hachage du bloc est ajouté à la file d'attente des blocs.")]),e._v(" "),a("p",[e._v("Analyse et vérifie les hachages des transactions, et sélectionne les transactions qui n'ont pas encore été présentes sur le nœud.")]),e._v(" "),a("h4",{attrs:{id:"response-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-1"}},[e._v("#")]),e._v(" Réponse ")]),e._v(" "),a("p",[e._v("Non. Après avoir traité la demande, une demande de "),a("a",{attrs:{href:"#type-2"}},[e._v("Type 2")]),e._v(" est émise.")]),e._v(" "),a("h3",{attrs:{id:"type-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-2"}},[e._v("#")]),e._v(" Type 2 ")]),e._v(" "),a("h1",{attrs:{id:"request-sender-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-2"}},[e._v("#")]),e._v(" ### Demandeur de l'expéditeur ")]),e._v(" "),a("p",[e._v("Cette demande est envoyée par le "),a("a",{attrs:{href:"#disseminator-daemon"}},[e._v("démon Disseminator")]),e._v(".")]),e._v(" "),a("h1",{attrs:{id:"request-data-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-data-2"}},[e._v("#")]),e._v(" ### Demande de données ")]),e._v(" "),a("p",[e._v("Les données de transaction, y compris la taille des données :")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("data_size (4 octets)")])]),e._v(" "),a("li",[a("p",[e._v("Taille des données de la transaction, en octets.")])]),e._v(" "),a("li",[a("p",[e._v("données (data_size octets)")])])]),e._v(" "),a("p",[e._v("Les données de la transaction.")]),e._v(" "),a("h1",{attrs:{id:"request-processing-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-processing-2"}},[e._v("#")]),e._v(" ### Traitement de la demande ")]),e._v(" "),a("p",[e._v("Vérifie la transaction et l'ajoute à la file d'attente des transactions.")]),e._v(" "),a("h4",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[e._v("#")]),e._v(" Réponse ")]),e._v(" "),a("p",[e._v("No.")]),e._v(" "),a("h3",{attrs:{id:"type-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-4"}},[e._v("#")]),e._v(" Type 4 ")]),e._v(" "),a("h4",{attrs:{id:"request-sender-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-3"}},[e._v("#")]),e._v(" Demande de l'expéditeur{#request-sender-3}")]),e._v(" "),a("p",[e._v("Cette demande est envoyée par le "),a("a",{attrs:{href:"#confirmations-daemon"}},[e._v("démon confirmations")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"request-data-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-data-3"}},[e._v("#")]),e._v(" Demande de données ")]),e._v(" "),a("p",[e._v("Identifiant de bloc.")]),e._v(" "),a("h4",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[e._v("#")]),e._v(" Réponse ")]),e._v(" "),a("p",[e._v("Hachage de bloc.")]),e._v(" "),a("p",[e._v("Renvoie "),a("code",[e._v("0")]),e._v(" s'il n'y a pas de bloc avec cet identifiant.")]),e._v(" "),a("h3",{attrs:{id:"type-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-7"}},[e._v("#")]),e._v(" Type 7 ")]),e._v(" "),a("h4",{attrs:{id:"request-sender-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-4"}},[e._v("#")]),e._v(" Demande de l'expéditeur{#request-sender-4}")]),e._v(" "),a("p",[e._v("Cette demande est envoyée par le "),a("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("démon BlockCollection")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"request-data-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-data-4"}},[e._v("#")]),e._v(" Demande de données ")]),e._v(" "),a("p",[e._v("Identifiant de bloc.")]),e._v(" "),a("ul",[a("li",[e._v("block_id (4 octets)")])]),e._v(" "),a("h4",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[e._v("#")]),e._v(" Réponse ")]),e._v(" "),a("p",[e._v("Les données du bloc, y compris la taille des données.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("data_size (4 octets)")])]),e._v(" "),a("li",[a("p",[e._v("Taille des données du bloc, en octets.")])]),e._v(" "),a("li",[a("p",[e._v("data (data_size octets)")])])]),e._v(" "),a("p",[e._v("Les données du bloc.")]),e._v(" "),a("p",[e._v("La connexion est fermée s'il n'y a pas de bloc avec cet identifiant.")]),e._v(" "),a("h3",{attrs:{id:"type-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-10"}},[e._v("#")]),e._v(" Type 10 ")]),e._v(" "),a("h1",{attrs:{id:"request-sender-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-5"}},[e._v("#")]),e._v(" ### Demande de l'expéditeur ")]),e._v(" "),a("p",[e._v("Cette demande est envoyée par le [démon BlockCollection].(#blockcollection-daemon).")]),e._v(" "),a("h1",{attrs:{id:"request-data-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-data-5"}},[e._v("#")]),e._v(" ### Demande de données ")]),e._v(" "),a("p",[e._v("Non.")]),e._v(" "),a("h4",{attrs:{id:"response-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-5"}},[e._v("#")]),e._v(" Réponse ")]),e._v(" "),a("p",[e._v("Identifiant de bloc.")]),e._v(" "),a("ul",[a("li",[e._v("block_id (4 octets)")])])])}),[],!1,null,null,null);a.default=n.exports}}]);