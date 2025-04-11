import { useEffect, useState } from 'react';

export default function HomePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch('mock/user.json')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>🙋‍♂️ 사용자 정보 (Mock)</h2>
      {user ? (
        <ul>
          <li>
            <strong>ID:</strong> {user.id}
          </li>
          <li>
            <strong>이름:</strong> {user.name}
          </li>
          <li>
            <strong>나이:</strong> {user.age}
          </li>
          <li>
            <strong>이메일:</strong> {user.email}
          </li>
        </ul>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
}
