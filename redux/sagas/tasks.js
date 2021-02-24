import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import api from '../../api/tasks';

function* addTask(action) {
  console.log('-- Saga: action --');
  console.log(action);

  const result = yield call(api.post, action.payload);
  console.log('-- Saga: api result --');
  console.log(result.data);

  yield put({ type: 'ADD_TASK_SUCCEEDED', payload: action.payload });
}

function* removeTask(action) {
  console.log('-- Saga: action --');
  console.log(action);

  const result = yield call(api.delete, action.payload);
  console.log('-- Saga: api result --');
  console.log(result.data);

  yield put({ type: 'REMOVE_TASK_SUCCEEDED', payload: action.payload });
}

function* fetchTask(action) {
  console.log('-- Saga: action --');
  console.log(action);

  const result = yield call(api.list);
  console.log('-- Saga: api result --');
  console.log(result.data);

  yield put({ type: 'FETCH_TASK_SUCCEEDED', payload: result.data });
}

function* tasksSaga() {
  yield takeEvery('ADD_TASK', addTask);
  yield takeEvery('REMOVE_TASK', removeTask);
  yield takeLatest('FETCH_TASK', fetchTask);
}

export default tasksSaga;
