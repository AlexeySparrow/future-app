/* input search in up panel */
const UPDATE_REQUEST_SEARCH = 'UPDATE_REQUEST_SEARCH';
const ON_SEARCH = 'ON_SEARCH';
/*--------------------------*/
/* work on adding a new user */
const UPDATE_TEXT_PAGE_ADD_USER_ID = 'UPDATE_TEXT_PAGE_ADD_USER_ID';
const UPDATE_TEXT_PAGE_ADD_USER_FIRST_NAME = 'UPDATE_TEXT_PAGE_ADD_USER_FIRST_NAME';
const UPDATE_TEXT_PAGE_ADD_USER_LAST_NAME = 'UPDATE_TEXT_PAGE_ADD_USER_LAST_NAME';
const UPDATE_TEXT_PAGE_ADD_USER_EMAIL = 'UPDATE_TEXT_PAGE_ADD_USER_EMAIL';
const UPDATE_TEXT_PAGE_ADD_USER_PHONE = 'UPDATE_TEXT_PAGE_ADD_USER_PHONE';
const SEND_NEW_USER_IN_TABLE = 'SEND_NEW_USER_IN_TABLE';
/*---------------------------*/
/* preloader */
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
/*-----------*/
/* copy state users */
const SET_USERS = 'SET_USERS';
/* ---------------- */
/* sort more/less in table users */
const DIRECTION_SORT = 'DIRECTION_SORT';
const DIRECTION_SORT_FIELD_ARROW = 'DIRECTION_SORT_FIELD_ARROW';
/* ----------------------------- */
/* bottom window all info about user */
const DETAILS_USER_INFO = 'DETAILS_USER_INFO';
const ROW_USER_INFO = 'ROW_USER_INFO';
/* --------------------------------- */
/* open add user panel */
const OPEN_ADD_USER_PANEL = 'OPEN_ADD_USER_PANEL';
/* ------------------- */
/* toggle server data - big/small */
const BIG_SERVER_DATA = 'BIG_SERVER_DATA';
const SMALL_SERVER_DATA = 'SMALL_SERVER_DATA';
/* ------------------------------ */
/* pagination */
const CURRENT_BUTTON = 'CURRENT_BUTTON';
const CURRENT_BLOCK_ROWS = 'CURRENT_BLOCK_ROWS';
/* ---------- */

let initialState = {
    users: [], //Array users
    titleTable: [
        {type: 'id',name: 'Id'},
        {type: 'firstName',name: 'First Name'},
        {type: 'lastName',name: 'Last Name'},
        {type: 'email',name: 'Email'},
        {type: 'phone',name: 'Phone'}
    ],

    newRequestSearch: '', //input search in table page to display letters
    onSearch: '', //string search

    newTextPageAddUserId: '', //input id in add user page to display letters
    newTextPageAddUserFirstName: '', //input First Name in add user page to display letters
    newTextPageAddUserLastName: '', //input Last Name in add user page to display letters
    newTextPageAddUserEmail: '', //input Email in add user page to display letters
    newTextPageAddUserPhone: '', //input Phone in add user page to display letters

    isFetching: false, //preloader

    directionSort: true, // direction sort table users
    fieldArrow: '', // direction sort field arrow

    detailUser: '', // detail user info from user page
    rowUser: '', // row user info from user page

    openPanelAddUser: false, //click btn for open add user panel

    bigServerData: false, //if true => download dig server data
    smallServerData: false, //if true => download small server data

    currentButton: 1, //active button number in pagination
    maxUsersOnPage: 17, //amount users on page pagination
    currentBlockRows: [], //array separated users on blocks
    dotsRight: '...', // dots in pagination
    dotsLeft: '...', // dots in pagination
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        /* input search in up panel */
        case UPDATE_REQUEST_SEARCH:
            return {
                ...state,
                newRequestSearch: action.newRequestSearch
            }
        case ON_SEARCH:
            return {
                ...state,
                onSearch: action.onSearch
            }
        /*--------------------------*/
        /* work on adding a new user */
        case UPDATE_TEXT_PAGE_ADD_USER_ID:
            return {
                ...state,
                newTextPageAddUserId: action.newUser
            }
        case UPDATE_TEXT_PAGE_ADD_USER_FIRST_NAME:
            return {
                ...state,
                newTextPageAddUserFirstName: action.newUser
            }
        case UPDATE_TEXT_PAGE_ADD_USER_LAST_NAME:
            return {
                ...state,
                newTextPageAddUserLastName: action.newUser
            }
        case UPDATE_TEXT_PAGE_ADD_USER_EMAIL:
            return {
                ...state,
                newTextPageAddUserEmail: action.newUser
            }
        case UPDATE_TEXT_PAGE_ADD_USER_PHONE:
            return {
                ...state,
                newTextPageAddUserPhone: action.newUser
            }
        case SEND_NEW_USER_IN_TABLE: {
            let newUser = {
                id: state.newTextPageAddUserId,
                firstName: state.newTextPageAddUserFirstName,
                lastName: state.newTextPageAddUserLastName,
                email: state.newTextPageAddUserEmail,
                phone: state.newTextPageAddUserPhone,
            }
            return {
                ...state,
                newTextPageAddUserId: '',
                newTextPageAddUserFirstName: '',
                newTextPageAddUserLastName: '',
                newTextPageAddUserEmail: '',
                newTextPageAddUserPhone: '',
                users: [newUser, ...state.users]
            }
        }
        /*----------------------------*/
        /* copy state users */
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        /*-------------------*/
        /* preloader */
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        /* ---------- */
        /* sort more/less in table users */
        case DIRECTION_SORT:
            return {
                ...state,
                directionSort: action.directionSort
            }
        case DIRECTION_SORT_FIELD_ARROW:
            return {
                ...state,
                fieldArrow: action.fieldArrow
            }
        /* ----------------------------- */
        /* bottom window all info about user */
        case DETAILS_USER_INFO:
            return {
                ...state,
                detailUser: action.detailUser
            }
        case ROW_USER_INFO:
            return {
                ...state,
                rowUser: action.rowUser
            }
        /* --------------------------------- */
        /* open add user panel */
        case OPEN_ADD_USER_PANEL:
            return {
                ...state,
                openPanelAddUser: action.openPanelAddUser
            }
        /* ----------------- */
        /* toggle server data - big/small */
        case BIG_SERVER_DATA:
            return {
                ...state,
                bigServerData: action.bigServerData
            }
        case SMALL_SERVER_DATA:
            return {
                ...state,
                smallServerData: action.smallServerData
            }
        /* ------------------------------ */
        /* pagination */
        case CURRENT_BUTTON:
            return {
                ...state,
                currentButton: action.currentButton
            }
        case CURRENT_BLOCK_ROWS:
            return {
                ...state,
                currentBlockRows: action.currentBlockRows
            }
        /* ---------- */
        default:
            return state;
    }
}

/* input search in up panel */
export const updateTextRequestSearch = (newRequestSearch) => ({type: UPDATE_REQUEST_SEARCH, newRequestSearch});
export const updateOnSearch = (onSearch) => ({type: ON_SEARCH, onSearch})
/*--------------------------*/
/* work on adding a new user */
export const updateTextPageAddUserId = (newUser) => ({type: UPDATE_TEXT_PAGE_ADD_USER_ID, newUser});
export const updateTextPageAddUserFirstName = (newUser) => ({type: UPDATE_TEXT_PAGE_ADD_USER_FIRST_NAME, newUser});
export const updateTextPageAddUserLastName = (newUser) => ({type: UPDATE_TEXT_PAGE_ADD_USER_LAST_NAME, newUser});
export const updateTextPageAddUserEmail = (newUser) => ({type: UPDATE_TEXT_PAGE_ADD_USER_EMAIL, newUser});
export const updateTextPageAddUserPhone = (newUser) => ({type: UPDATE_TEXT_PAGE_ADD_USER_PHONE, newUser});
export const setSendNewUser = () => ({type: SEND_NEW_USER_IN_TABLE});
/*---------------------------*/
/* preloader */
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
/*-----------*/
/* copy state users */
export const setUsers = (users) => ({type: SET_USERS, users});
/* ---------------- */
/* sort more/less in table users */
export const setDirectionSort = (directionSort) => ({type: DIRECTION_SORT, directionSort});
export const setFieldArrow = (fieldArrow) => ({type: DIRECTION_SORT_FIELD_ARROW, fieldArrow});
/* ----------------------------- */
/* bottom window all info about user */
export const setDetailUser = (detailUser) => ({type: DETAILS_USER_INFO, detailUser});
export const setRowUser = (rowUser) => ({type: ROW_USER_INFO, rowUser});
/* --------------------------------- */
/* open add user panel */
export const setOpenPanelAddUser = (openPanelAddUser) => ({type: OPEN_ADD_USER_PANEL, openPanelAddUser});
/* ------------------- */
/* toggle server data - big/small */
export const setBigServerData = (bigServerData) => ({type: BIG_SERVER_DATA, bigServerData});
export const setSmallServerData = (smallServerData) => ({type: SMALL_SERVER_DATA, smallServerData});
/* ------------------------------ */
/* pagination */
export const setCurrentButton = (currentButton) => ({type: CURRENT_BUTTON, currentButton});
export const setCurrentBlockRows = (currentBlockRows) => ({type: CURRENT_BLOCK_ROWS, currentBlockRows});
/* ---------- */

export default tableReducer;