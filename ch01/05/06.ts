// ## any타입은 코드 리팩터링 때 버그를 감춥니다
interface ComponentProps {
  onSelectItem: (item: any) => void;
}

export default {};
