export type Item = {
    name: string;
    slug: string;
  };
  
  export const menus: { name: string; items: Item[] }[] = [
    {
      name: 'Next.js를 위한 리액트 개요',
      items: [
        { name: '바닐라 자바스크립트', slug: 'html/vanilla.html', },
        { name: '리액트 변환', slug: 'html/react.html', },
        { name: '리액트 함수형 컴포넌트', slug: 'html/react-component.html', },
        { name: 'Next.js에서 실행', slug: '/', },
      ],
    },
    {
      name: '리액트 컴포넌트와 속성',
      items: [
        { name: '서버/클라이언트 컴포넌트', slug: 'server-component', },
        { name: '이펙트 훅', slug: 'effect', },
        { name: '컴포지션', slug: 'composition', },
        { name: '상태 끌어올리기', slug: 'lifting-stateup', },
      ],
    },
    {
      name: '리액트 사용자 상호작용과 상태 관리',
      items: [
        { name: '이벤트 처리', slug: 'event', },
        { name: '버튼 이벤트', slug: 'button', },
        { name: '폼 입력 기본', slug: 'input', },
        { name: '폼 입력 최신기법', slug: 'form-state', },
        { name: '리듀서', slug: 'reducer', },
        { name: '컨텍스트', slug: 'context', },
      ],
    },
    {
      name: '리액트의 고급 개념과 패턴',
      items: [
        { name: 'Ref 생성/사용', slug: 'ref', },
        { name: 'Ref 전달하기', slug: 'ref-forward', },
        { name: '조건부 렌더링', slug: 'conditional-rendering', },
        { name: '리스트 렌더링', slug: 'list-rendering', },
        { name: '메모 훅: 과도한 재렌더링 방지', slug: 'memo', },
        { name: '콜백 훅: 큰 리스트 재렌더링 방지', slug: 'list-rendering-callback', },
        { name: '사용자 정의 훅', slug: 'custom-hook', },
      ],
    },
  ];