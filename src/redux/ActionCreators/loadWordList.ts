import { Word, isWord, UploadWordListCreator } from './../../types';

/** Try to fetch data from local storage and save them in redux */
const loadWordList: UploadWordListCreator = () => (dispatch): void => {
    // Load words list from local storage or create a new list
    try {
        const parsed = JSON.parse(localStorage.getItem('wordList') || '');
        const words: Array<Word> = [];

        if (parsed.length) {
            parsed.forEach((word: any) => {
                if (isWord(word)) words.push(word);
            });
        }

        dispatch({
            type: 'UPLOAD_WORD_LIST',
            words,
        });
    } catch (_e) {
        localStorage.removeItem('wordList');
    }
};
export default loadWordList;
