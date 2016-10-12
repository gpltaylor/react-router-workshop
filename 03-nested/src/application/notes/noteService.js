/*
 * A Mock notes service, this can be updated to connect to any endpoint
 */
var notesData = [
  {noteId: 12, userId: 9493, message: 'Customer requests new product PROD30495'},
  {noteId: 45, userId: 8452, message: 'Advised customer that we don\'t have item in stock at the moment' },
];

export default {
  getNotes: () => notesData
};
