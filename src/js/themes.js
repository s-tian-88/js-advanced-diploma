export default function theme(lvl) {
  const Themes = [
    'prairie',
    'desert',
    'arctic',
    'mountain',
  ];
  return Themes[lvl - 1];
}
