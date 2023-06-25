(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{300:function(e,n,a){"use strict";a.r(n);var r=a(14),t=Object(r.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"daemon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#daemon"}},[e._v("#")]),e._v(" Dämon ")]),e._v(" "),n("p",[e._v("In diesem Abschnitt beschreiben wir aus technischer Sicht, wie IBax-Knoten miteinander interagieren.")]),e._v(" "),n("h2",{attrs:{id:"about-the-server-daemon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#about-the-server-daemon"}},[e._v("#")]),e._v(" Über den Server-Daemon ")]),e._v(" "),n("p",[e._v("Der Server-Daemon muss auf jedem Netzwerkknoten laufen, der verschiedene Serverfunktionen ausführt und das Blockchain-Protokoll von IBax unterstützt. Im Blockchain-Netzwerk verteilt der Daemon Blöcke und Transaktionen, generiert neue Blöcke und verifiziert empfangene Blöcke und Transaktionen und kann das Fork-Problem vermeiden.")]),e._v(" "),n("h3",{attrs:{id:"honor-node-daemon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#honor-node-daemon"}},[e._v("#")]),e._v(" Honor-Knoten-Daemon ")]),e._v(" "),n("p",[e._v("Ein Ehrenknoten führt die folgenden Server-Daemons aus:")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"#blockgenerator-daemon"}},[e._v("BlockGenerator-Daemon")])]),e._v(" "),n("p",[e._v("Generieren neuer Blöcke.")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("BlockCollection-Daemon")])]),e._v(" "),n("p",[e._v("Herunterladen neuer Blöcke von anderen Knoten.")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#confirmations-daemon"}},[e._v("Bestätigungs-Daemon")])]),e._v(" "),n("p",[e._v("Bestätigen, dass Blöcke auf dem Knoten auch auf den meisten anderen Knoten vorhanden sind.")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#disseminator-daemon"}},[e._v("Disseminator-Daemon")])]),e._v(" "),n("p",[e._v("Verteilen von Transaktionen und Blöcken an andere Ehrenknoten.")])]),e._v(" "),n("li",[n("p",[e._v("QueueParserBlocks-Daemon")]),e._v(" "),n("p",[e._v("Blöcke in der Warteschlange, die Blöcke von anderen Knoten enthält.")]),e._v(" "),n("p",[e._v("Die Blockverarbeitungslogik ist die gleiche wie bei "),n("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("BlockCollection-Daemon")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("QueueParserTx-Daemon")]),e._v(" "),n("p",[e._v("Überprüfung der Transaktionen in der Warteschlange.")])]),e._v(" "),n("li",[n("p",[e._v("Scheduler-Daemon")]),e._v(" "),n("p",[e._v("Laufende Verträge wie geplant.")])])]),e._v(" "),n("h3",{attrs:{id:"guardian-node-daemon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#guardian-node-daemon"}},[e._v("#")]),e._v(" Guardian-Knoten-Daemon ")]),e._v(" "),n("p",[e._v("Ein Wächterknoten führt die folgenden Server-Daemons aus:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("BlockCollection-Daemon")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#confirmations-daemon"}},[e._v("Bestätigungs-Daemon")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#disseminator-daemon"}},[e._v("Disseminator-Daemon")])]),e._v(" "),n("li",[e._v("QueueParserTx")]),e._v(" "),n("li",[e._v("Planer")])]),e._v(" "),n("h2",{attrs:{id:"blockcollection-daemon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blockcollection-daemon"}},[e._v("#")]),e._v(" BlockCollection-Daemon ")]),e._v(" "),n("p",[e._v("Dieser Daemon lädt Blöcke herunter und synchronisiert die Blockchain mit anderen Netzwerkknoten.")]),e._v(" "),n("h3",{attrs:{id:"blockchain-synchronization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-synchronization"}},[e._v("#")]),e._v(" Blockchain-Synchronisation ")]),e._v(" "),n("p",[e._v("Dieser Daemon synchronisiert die Blockchain, indem er die maximale Blockhöhe im Blockchain-Netzwerk bestimmt, neue Blöcke anfordert und das Fork-Problem in der Blockchain löst.")]),e._v(" "),n("h4",{attrs:{id:"check-for-blockchain-updates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check-for-blockchain-updates"}},[e._v("#")]),e._v(" Nach Blockchain-Updates suchen ")]),e._v(" "),n("p",[e._v("Dieser Daemon sendet Anforderungen von der aktuellen Block-ID an alle Ehrenknoten.")]),e._v(" "),n("p",[e._v("Wenn die aktuelle Block-ID des Knotens, auf dem der Daemon läuft, kleiner ist als die aktuelle Block-ID eines beliebigen Ehrenknotens, gilt der Blockchain-Netzwerkknoten als veraltet.")]),e._v(" "),n("h4",{attrs:{id:"download-new-blocks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#download-new-blocks"}},[e._v("#")]),e._v(" Neue Blöcke herunterladen ")]),e._v(" "),n("p",[e._v("Der Knoten, der die größte aktuelle Blockhöhe zurückgibt, wird als letzter Knoten betrachtet.\nDer Daemon lädt alle unbekannten Blöcke herunter.")]),e._v(" "),n("h4",{attrs:{id:"solving-the-fork-issue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#solving-the-fork-issue"}},[e._v("#")]),e._v(" Lösung des Fork-Problems ")]),e._v(" "),n("p",[e._v("Wenn ein Fork in der Blockchain erkannt wird, verschiebt der Daemon den Fork rückwärts, indem er alle Blöcke in einen gemeinsamen übergeordneten Block herunterlädt.\nWenn der gemeinsame übergeordnete Block gefunden wird, wird ein Blockchain-Rollback auf dem Knoten durchgeführt, auf dem der Daemon ausgeführt wird, und der richtige Block wird zur Blockchain hinzugefügt, bis der neueste enthalten ist.")]),e._v(" "),n("h3",{attrs:{id:"tables-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tables-1"}},[e._v("#")]),e._v(" Tabellen ")]),e._v(" "),n("p",[e._v("Der BlocksCollection-Daemon verwendet die folgenden Tabellen:")]),e._v(" "),n("ul",[n("li",[e._v("block_chain")]),e._v(" "),n("li",[e._v("Transaktionen")]),e._v(" "),n("li",[e._v("Transaktionsstatus")]),e._v(" "),n("li",[e._v("info_block")])]),e._v(" "),n("h3",{attrs:{id:"request-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-1"}},[e._v("#")]),e._v(" Anfrage ")]),e._v(" "),n("p",[e._v("Der BlockCollection-Daemon sendet die folgenden Anforderungen an andere Daemons:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#type-10"}},[e._v("Type 10")]),e._v(" zeigt auf die größte Block-ID unter allen Ehrenknoten.")]),e._v(" "),n("li",[n("a",{attrs:{href:"#type-7"}},[e._v("Type 7")]),e._v(" zeigt auf die Daten mit der größten Block-ID.")])]),e._v(" "),n("h2",{attrs:{id:"blockgenerator-daemon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blockgenerator-daemon"}},[e._v("#")]),e._v(" BlockGenerator-Dämon ")]),e._v(" "),n("p",[e._v("Der BlockGenerator-Daemon generiert neue Blöcke.")]),e._v(" "),n("h3",{attrs:{id:"pre-verification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pre-verification"}},[e._v("#")]),e._v(" Vorabüberprüfung ")]),e._v(" "),n("p",[e._v("Der BlockGenerator-Daemon analysiert die neuesten Blöcke in der Blockchain, um neue Blockgenerierungspläne zu erstellen.")]),e._v(" "),n("p",[e._v("Wenn die folgenden Bedingungen erfüllt sind, kann ein neuer Block generiert werden:")]),e._v(" "),n("ul",[n("li",[e._v("Der Knoten, der den letzten Block generiert hat, befindet sich in einem Knoten innerhalb der Ehrenknotenliste und führt den Daemon aus.")]),e._v(" "),n("li",[e._v("Die kürzeste Zeit, seit der letzte nicht verifizierte Block generiert wurde.")])]),e._v(" "),n("h3",{attrs:{id:"block-generation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#block-generation"}},[e._v("#")]),e._v(" Blockgenerierung ")]),e._v(" "),n("p",[e._v("Ein vom Daemon generierter neuer Block enthält alle neuen Transaktionen, die vom "),n("a",{attrs:{href:"#disseminator-daemon"}},[e._v("Disseminator-Daemon")]),e._v(" anderer Knoten empfangen oder von dem Knoten generiert werden können, der den Daemon ausführt. Der generierte Block wird in der Node-Datenbank gespeichert.")]),e._v(" "),n("h3",{attrs:{id:"tables-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tables-2"}},[e._v("#")]),e._v(" Tabellen ")]),e._v(" "),n("p",[e._v("Der BlockGenerator-Daemon verwendet die folgenden Tabellen:")]),e._v(" "),n("ul",[n("li",[e._v("block_chain (speichert neue Blöcke)")]),e._v(" "),n("li",[e._v("Transaktionen")]),e._v(" "),n("li",[e._v("Transaktionsstatus")]),e._v(" "),n("li",[e._v("info_block")])]),e._v(" "),n("h3",{attrs:{id:"request-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[e._v("#")]),e._v(" Anfrage ")]),e._v(" "),n("p",[e._v("Der BlockGenerator-Daemon stellt keine Anfrage an andere Daemons.")]),e._v(" "),n("h2",{attrs:{id:"disseminator-daemon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#disseminator-daemon"}},[e._v("#")]),e._v(" Disseminator-Daemon ")]),e._v(" "),n("p",[e._v("Der Disseminator-Daemon sendet Transaktionen und Blöcke an alle Ehrenknoten.")]),e._v(" "),n("h3",{attrs:{id:"guardian-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#guardian-node"}},[e._v("#")]),e._v(" Guardian-Knoten ")]),e._v(" "),n("p",[e._v("Bei der Arbeit an einem Wächterknoten sendet der Daemon von seinem Knoten generierte Transaktionen an alle Ehrenknoten.")]),e._v(" "),n("h3",{attrs:{id:"honor-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#honor-node"}},[e._v("#")]),e._v(" Ehrenknoten ")]),e._v(" "),n("p",[e._v("Bei der Arbeit an einem Ehrenknoten sendet der Daemon generierte Blöcke und Transaktions-Hashes an alle Ehrenknoten.")]),e._v(" "),n("p",[e._v("Dann antwortet der Ehrenknoten auf Transaktionsanfragen, die ihm unbekannt sind. Als Antwort sendet der Daemon die vollständigen Transaktionsdaten.")]),e._v(" "),n("h3",{attrs:{id:"tables-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tables-3"}},[e._v("#")]),e._v(" Tabellen ")]),e._v(" "),n("p",[e._v("Der Disseminator-Daemon verwendet die folgenden Tabellen:")]),e._v(" "),n("ul",[n("li",[e._v("Transaktionen")])]),e._v(" "),n("h3",{attrs:{id:"request-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[e._v("#")]),e._v(" Anfrage ")]),e._v(" "),n("p",[e._v("Der Disseminator-Daemon sendet die folgenden Anforderungen an andere Daemons:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#type-1"}},[e._v("Type 1")]),e._v(" Senden Sie Transaktionen und Block-Hashes an den Ehrenknoten.")]),e._v(" "),n("li",[n("a",{attrs:{href:"#type-2"}},[e._v("Type 2")]),e._v(" Transaktionsdaten vom Ehrenknoten empfangen.")])]),e._v(" "),n("h2",{attrs:{id:"confirmations-daemon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#confirmations-daemon"}},[e._v("#")]),e._v(" Bestätigungs-Daemon ")]),e._v(" "),n("p",[e._v("Der Confirmations-Daemon prüft, ob alle Blöcke in seinem Knoten auf den meisten anderen Knoten vorhanden sind.")]),e._v(" "),n("h3",{attrs:{id:"block-confirmation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#block-confirmation"}},[e._v("#")]),e._v(" Bestätigung blockieren ")]),e._v(" "),n("p",[e._v("Ein von mehreren Knoten im Netzwerk bestätigter Block wird als bestätigter Block betrachtet.")]),e._v(" "),n("p",[e._v("Der Daemon bestätigt nacheinander alle Blöcke, beginnend mit dem ersten, der derzeit nicht in der Datenbank bestätigt ist.")]),e._v(" "),n("p",[e._v("Jeder Block wird wie folgt bestätigt:")]),e._v(" "),n("ul",[n("li",[e._v("Senden einer Anfrage, die die ID des zu bestätigenden Blocks enthält, an alle Ehrenknoten.")]),e._v(" "),n("li",[e._v("Alle Ehrenknoten reagieren auf den Block-Hash.")]),e._v(" "),n("li",[e._v("Wenn der geantwortete Hash mit dem Hash des Blocks auf dem Daemon-Knoten übereinstimmt, wird der Wert des Bestätigungszählers erhöht. Falls nicht, wird der Löschzählerwert erhöht.")])]),e._v(" "),n("h3",{attrs:{id:"tables-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tables-4"}},[e._v("#")]),e._v(" Tabellen ")]),e._v(" "),n("p",[e._v("Der Confirmations-Daemon verwendet die folgenden Tabellen:")]),e._v(" "),n("ul",[n("li",[e._v("Bestätigung")]),e._v(" "),n("li",[e._v("info_block")])]),e._v(" "),n("h3",{attrs:{id:"request-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-4"}},[e._v("#")]),e._v(" Anfrage ")]),e._v(" "),n("p",[e._v("Der Confirmations-Daemon sendet die folgenden Anfragen an andere Daemons:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#type-4"}},[e._v("Type 4")]),e._v(" Fordert Block-Hashes vom Honor-Knoten an.")])]),e._v(" "),n("h2",{attrs:{id:"tcp-service-protocol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tcp-service-protocol"}},[e._v("#")]),e._v(" TCP-Dienstprotokoll ")]),e._v(" "),n("p",[e._v("Das TCP-Dienstprotokoll arbeitet auf Ehrenknoten und Wächterknoten, die das Binärprotokoll auf TCP für Anfragen von den Daemons BlocksCollection, Disseminator und Confirmation verwenden.")]),e._v(" "),n("h2",{attrs:{id:"request-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-type"}},[e._v("#")]),e._v(" Anfragetyp ")]),e._v(" "),n("p",[e._v("Jede Anfrage hat einen Typ, der durch die ersten zwei Bytes der Anfrage definiert ist.")]),e._v(" "),n("h2",{attrs:{id:"type-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-1"}},[e._v("#")]),e._v(" Typ 1 ")]),e._v(" "),n("h4",{attrs:{id:"request-sender-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-1"}},[e._v("#")]),e._v(" Absender anfordern ")]),e._v(" "),n("p",[e._v("Diese Anfrage wird vom [Disseminator-Daemon] (#disseminator-daemon) gesendet.")]),e._v(" "),n("h4",{attrs:{id:"request-data-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-data-1"}},[e._v("#")]),e._v(" Daten anfordern ")]),e._v(" "),n("p",[e._v("Hashes der Transaktion und des Blocks.")]),e._v(" "),n("h4",{attrs:{id:"request-processing-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-processing-1"}},[e._v("#")]),e._v(" Bearbeitung der Anfrage ")]),e._v(" "),n("p",[e._v("Der Block-Hash wird der Block-Warteschlange hinzugefügt.")]),e._v(" "),n("p",[e._v("Analysiert und verifiziert die Transaktions-Hashes und wählt Transaktionen aus, die noch nicht auf dem Knoten erschienen sind.")]),e._v(" "),n("h4",{attrs:{id:"response-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response-1"}},[e._v("#")]),e._v(" Antwort ")]),e._v(" "),n("p",[e._v("Nein. Nach der Verarbeitung der Anfrage wird eine "),n("a",{attrs:{href:"#type-2"}},[e._v("Typ 2")]),e._v("-Anfrage ausgegeben.")]),e._v(" "),n("h2",{attrs:{id:"type-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-2"}},[e._v("#")]),e._v(" Typ 2 ")]),e._v(" "),n("h4",{attrs:{id:"request-sender-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-2"}},[e._v("#")]),e._v(" Absender anfordern ")]),e._v(" "),n("p",[e._v("Diese Anfrage wird vom [Disseminator-Daemon] (#disseminator-daemon) gesendet.")]),e._v(" "),n("h4",{attrs:{id:"request-data-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-data-2"}},[e._v("#")]),e._v(" Daten anfordern ")]),e._v(" "),n("p",[e._v("Die Transaktionsdaten, einschließlich der Datengröße:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("data_size (4 Bytes)")])]),e._v(" "),n("li",[n("p",[e._v("Größe der Transaktionsdaten in Byte.")])]),e._v(" "),n("li",[n("p",[e._v("Daten (data_size bytes)")])])]),e._v(" "),n("p",[e._v("Die Transaktionsdaten.")]),e._v(" "),n("h4",{attrs:{id:"request-processing-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-processing-2"}},[e._v("#")]),e._v(" Bearbeitung der Anfrage ")]),e._v(" "),n("p",[e._v("Verifiziert die Transaktion und fügt sie der Transaktionswarteschlange hinzu.")]),e._v(" "),n("h4",{attrs:{id:"response-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[e._v("#")]),e._v(" Antwort ")]),e._v(" "),n("p",[e._v("Nein.")]),e._v(" "),n("h2",{attrs:{id:"type-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-4"}},[e._v("#")]),e._v(" Typ 4 ")]),e._v(" "),n("h4",{attrs:{id:"request-sender-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-3"}},[e._v("#")]),e._v(" Absender anfordern ")]),e._v(" "),n("p",[e._v("Diese Anfrage wird vom [Bestätigungs-Daemon] (#confirmations-daemon) gesendet.")]),e._v(" "),n("h4",{attrs:{id:"request-data-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-data-3"}},[e._v("#")]),e._v(" Daten anfordern ")]),e._v(" "),n("p",[e._v("Block-ID.")]),e._v(" "),n("h4",{attrs:{id:"response-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[e._v("#")]),e._v(" Antwort ")]),e._v(" "),n("p",[e._v("Hash blockieren.")]),e._v(" "),n("p",[e._v("Gibt "),n("code",[e._v("0")]),e._v(" zurück, wenn kein Block mit dieser ID vorhanden ist.")]),e._v(" "),n("h2",{attrs:{id:"type-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-7"}},[e._v("#")]),e._v(" Geben Sie 7 ein ")]),e._v(" "),n("h4",{attrs:{id:"request-sender-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-4"}},[e._v("#")]),e._v(" Absender anfordern ")]),e._v(" "),n("p",[e._v("Diese Anfrage wird vom [BlockCollection-Daemon] (#blockcollection-daemon) gesendet.")]),e._v(" "),n("h4",{attrs:{id:"request-data-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-data-4"}},[e._v("#")]),e._v(" Daten anfordern ")]),e._v(" "),n("p",[e._v("Block-ID.")]),e._v(" "),n("ul",[n("li",[e._v("block_id (4 Bytes)")])]),e._v(" "),n("h4",{attrs:{id:"response-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[e._v("#")]),e._v(" Antwort ")]),e._v(" "),n("p",[e._v("Die Blockdaten, einschließlich der Datengröße.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("data_size (4 Bytes)")])]),e._v(" "),n("li",[n("p",[e._v("Größe der Blockdaten in Bytes.")])]),e._v(" "),n("li",[n("p",[e._v("Daten (data_size bytes)")])])]),e._v(" "),n("p",[e._v("Die Blockdaten.")]),e._v(" "),n("p",[e._v("Die Verbindung wird geschlossen, wenn kein Block mit dieser ID vorhanden ist.")]),e._v(" "),n("h2",{attrs:{id:"type-10"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-10"}},[e._v("#")]),e._v(" Geben Sie 10 ein ")]),e._v(" "),n("h4",{attrs:{id:"request-sender-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-5"}},[e._v("#")]),e._v(" Absender anfordern ")]),e._v(" "),n("p",[e._v("Diese Anfrage wird vom [BlockCollection-Daemon] (#blockcollection-daemon) gesendet.")]),e._v(" "),n("h4",{attrs:{id:"request-data-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-data-5"}},[e._v("#")]),e._v(" Daten anfordern ")]),e._v(" "),n("p",[e._v("Nein.")]),e._v(" "),n("h4",{attrs:{id:"response-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response-5"}},[e._v("#")]),e._v(" Antwort ")]),e._v(" "),n("p",[e._v("Block-ID.")]),e._v(" "),n("ul",[n("li",[e._v("block_id (4 Bytes)")])])])}),[],!1,null,null,null);n.default=t.exports}}]);