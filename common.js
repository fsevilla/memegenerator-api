
class Common {

    msg = '';

    getMessage() {
        return this.msg;
    }

    setMessage(p) {
        this.msg = p;
    }

}

module.exports = new Common();