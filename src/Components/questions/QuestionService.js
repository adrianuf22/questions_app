const API = 'http://polls.apiblueprint.org/';
const ENDPOINT = 'questions';

class QuestionService {
        
    static load() {
        return window.fetch(API + ENDPOINT).then(res => res.json());
    }
}

export default QuestionService;