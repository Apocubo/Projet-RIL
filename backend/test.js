// importer le fichier index.js
import { add } from './index.js';
// importer la librairie assert
import { equal } from 'assert';


/* Partie de test à executer pour la pipeline GITHUB*/
describe('testing', () => {
	// tester chaque fonction de operation.js
	it('should be 40 when you add 20 and 20', () => {
	    // test ...
          const wantedResult = 40; 
          const result = add(20,20);
          // order matters given result, wanted result
          equal(result, wantedResult);
      })
})
/* Partie de test à executer pour la pipeline GITHUB*/
