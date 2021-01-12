//region imports
import {IPost}      from '../types/Entities/IPost';
import {MOCK_LIKES} from './MOCK_LIKES';
//endregion
 

export const MOCK_POSTS: IPost[] = [
    {
        id       : '1',
        user_id  : '1',
        user_name: 'Hazel Biesinger',
        content  : 'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
        date     : '28.11.2019',
        time     : '11:13',
        likes    : [MOCK_LIKES[3]]
    },
    {
        id       : '2',
        user_id  : '1',
        user_name: 'Hazel Biesinger',
        content  : 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
        date     : '13.04.2020',
        time     : '1:02',
        likes    : []
    },
    {
        id       : '3',
        user_id  : '1',
        user_name: 'Hazel Biesinger',
        content  : 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
        date     : '07.07.2020',
        time     : '12:24',
        likes    : [MOCK_LIKES[4], MOCK_LIKES[5], MOCK_LIKES[7], MOCK_LIKES[8]]
    },
    {
        id       : '4',
        user_id  : '4',
        user_name: 'Bayard Dibley',
        content  : 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        date     : '19.05.2020',
        time     : '18:18',
        likes    : [MOCK_LIKES[9]]
    },
    {
        id       : '5',
        user_id  : '4',
        user_name: 'Bayard Dibley',
        content  : 'Aliquam erat volutpat. In congue.',
        date     : '17.10.2020',
        time     : '9:39',
        likes    : []
    },
    {
        id       : '6',
        user_id  : '6',
        user_name: 'Farris Passo',
        content  : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
        date     : '23.11.2020',
        time     : '18:33',
        likes    : [MOCK_LIKES[1], MOCK_LIKES[2]]
    },
    {
        id       : '7',
        user_id  : '7',
        user_name: 'Kristien Cicco',
        content  : 'Integer ac neque. Duis bibendum.',
        date     : '24.10.2020',
        time     : '13:35',
        likes    : []
    },
    {
        id       : '8',
        user_id  : '7',
        user_name: 'Kristien Cicco',
        content  : 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        date     : '14.12.2019',
        time     : '11:47',
        likes    : [MOCK_LIKES[0]]
    },
    {
        id       : '9',
        user_id  : '7',
        user_name: 'Kristien Cicco',
        content  : 'Duis at velit eu est congue elementum.',
        date     : '26.02.2020',
        time     : '19:28',
        likes    : []
    },
    {
        id       : '10',
        user_id  : '10',
        user_name: 'Issi Neat',
        content  : 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
        date     : '27.01.2020',
        time     : '20:20',
        likes    : []
    }
];

