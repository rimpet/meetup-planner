import moment from 'moment';

const formatDate = (dateString) => {
    let date = moment(dateString, 'YYYY-MM-DDTHH:mm');
    let formated = date.format('YYYY-MM-DD HH:mm');
    return formated;
};

export default formatDate;