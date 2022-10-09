class Score {
    constructor(score, initials) {
        this.score = score;
        this.initials = initials;
    }
    static compare(a, b) {
        if (a.score < b.score) {
            return 1;
        } else if (a.score > b.score) {
            return -1;
        } else {
            if (a.initials > b.initials) {
                return 1;
            } else if (a.initials < b.initials) {
                return -1;
            } else {
                return 0;
            }
        }
    }
}