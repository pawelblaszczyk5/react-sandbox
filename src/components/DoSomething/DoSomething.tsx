import {useEffect, useState} from 'react';
import axios from 'axios';

interface MockData {
  color: string;
  animal: string;
}

enum RequestStatus {
  LOADING,
  SUCCESS,
  FAIL
}

export const DoSomething = () => {
  const [mockData, setMockData] = useState<MockData>();
  const [requestStatus, setRequestStatus] = useState<RequestStatus>();

  const getRandomMockData = () => {
    setRequestStatus(RequestStatus.LOADING);
    axios.get<MockData>('https://my.api.mockaroo.com/mockTest?key=d2b964e0')
      .then((res) => {
        setMockData(res.data);
        setRequestStatus(RequestStatus.SUCCESS);
      })
      .catch(() => {
        setRequestStatus(RequestStatus.FAIL);
      });
  };

  useEffect(() => {
    getRandomMockData();
  }, []);

  return (
    <div className="customFlex">
      {requestStatus === RequestStatus.FAIL && <p>Fail while loading, try again, sorry :(</p>}
      {requestStatus === RequestStatus.SUCCESS && <p style={{color: mockData?.color}}>{mockData?.animal}</p>}
      {requestStatus === RequestStatus.LOADING && <p>Data loading...</p>}
      <button onClick={getRandomMockData}>Get other data</button>
    </div>
  );
};
