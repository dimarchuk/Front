user = {
    age: 14,
    isAdmin: false,
    grant: function () {

        if(this.age >= 18)
        {
            this.isAdmin = true;
        } else this.isAdmin = false;
    }
};
user.grant();