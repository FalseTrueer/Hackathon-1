import { Module } from '../../core/module';
import { random } from '../../utils';
import './message.css';

export class MessagesModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

    if (document.querySelector('.message')) {
      return;
    }

    const messageBlock = document.createElement('p');
    messageBlock.className = 'message';

    const renderRandomMessage = async (id) => {
      try {
        const responseComments = await fetch(`${COMMENTS_URL}?id=${id}`);
        if (!responseComments.ok)
          throw new Error('Ошибка в получении данных о комментариях');
        const getCommentsResponse = await responseComments.json();

        messageBlock.textContent = getCommentsResponse[0].body;
        document.body.append(messageBlock);

        setTimeout(() => {
          messageBlock.remove();
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    };
    renderRandomMessage(random(1, 500));
  }
}
