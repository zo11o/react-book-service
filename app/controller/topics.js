const Controller = require('egg').Controller;

const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: {
    type: 'enum',
    value: [ 'ask', 'share', 'job'],
    required: false,
  },
  content: 'string',
};

class TopicController extends Controller {
  async create() {
    this.ctx.validate(createRule, ctx.request.body);
    const id = await ctx.service.topics.create(ctx.request.body);

    this.ctx.body = {
      topic_id: id,
    };
    ctx.status = 201;
  }
}

module.exports = TopicController;
