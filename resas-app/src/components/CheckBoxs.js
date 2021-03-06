/*
チェックボックス群を生成するためのコンポーネントです。
APIから取得した都道府県名のデータをもとに、必要な数だけチェックボックスを動的に作成しています。
*/

import './CheckBoxs.css';

const CheckBoxs = (props) => {
  return (
    <div className={'CheckBoxs' + ' ' + (props.modalState ? 'modalActive' : '')}>
      {props.prefs.map((pref) => (
        <div key={pref.prefName}>
          <label className='checkbox-label' htmlFor={pref.prefName}>
            {pref.prefName}
          </label>
          <input
            type='checkbox'
            className='checkbox'
            name='prefName'
            value={pref.prefCode}
            id={pref.prefName}
            onChange={props.onChangeCheck}
          />
        </div>
      ))}
    </div>
  );
};

export default CheckBoxs;
