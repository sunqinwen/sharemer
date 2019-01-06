define(function(require, exports, module) {

    var PlayerRouter = Backbone.Router.extend({
        routes: {
            "blog/(:id)":"blog",
            "timeline/(:id)":"timeline"
        },

        setApp: function(app) {
            this.app = app;
        },

        blog:function(id) {
            this.app.renderBlog(id);
        },

        timeline:function(id) {
            this.app.renderTimeline(id);
        },

        defaultRoute: function(args) {
            alert('资源不存在！');
        }
    });

    module.exports = PlayerRouter;
});