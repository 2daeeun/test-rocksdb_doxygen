### Doxygen 설치하기
- **Ubuntu**:
  ```bash
  sudo apt update &&  sudo apt install doxygen graphviz
  ```
- **Arch Linux**:
  ```bash
  sudo pacman -S doxygen graphviz
  ```

### RocksDB Doxygen 저장소 다운받기
```bash
git clone https://github.com/2daeeun/rocksdb_doxygen.git
cd rocksdb_doxygen
```

### 원본 RocksDB의 최신 브랜치 가져오기
예: v9.10.0
```bash
git remote add upstream https://github.com/facebook/rocksdb.git
git fetch upstream
git checkout v9.10.0
git checkout -b v9.10.0_doxygen
git push origin v9.10.0_doxygen
```


### Git Submodule (Doxygen Awesome)
커밋 메시지: add: Doxygen Awesome (CSS)
```bash
git submodule add https://github.com/jothepro/doxygen-awesome-css.git
cd doxygen-awesome-css
git checkout v2.3.4
cd ..
```

### Doxyfile
커밋 메시지: add: Doxyfile
```bash
wget https://raw.githubusercontent.com/2daeeun/rocksdb_doxygen/refs/heads/main/Doxyfile.md
git add Doxyfile
git commit -m "add: Doxyfile"
```

### Generate Doxygen documentation
예: v9.10.0  
커밋 메시지: Generate Doxygen documentation for RocksDB v9.10.0 (n/3))
