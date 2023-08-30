module.exports = (app: any) => {
    app.route('/users')
        .post(app.api.user.save)
}