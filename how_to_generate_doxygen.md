### RocksDB Doxygen 다운받기
```bash
git clone https://github.com/2daeeun/rocksdb_doxygen.git
cd rocksdb_doxygen
```

### Doxygen 설치하기
- **Ubuntu**:
  ```bash
  sudo apt update &&  sudo apt install doxygen graphviz
  ```
- **Arch Linux**:
  ```bash
  sudo pacman -S doxygen graphviz
  ```



### 원본 RocksDB의 최신 브랜치 가져오기
(예: v9.10.0)
```bash
git remote add upstream https://github.com/facebook/rocksdb.git
git fetch upstream
git checkout v9.10.0
git checkout -b v9.10.0_doxygen
git push origin v9.10.0_doxygen
```


### Git Submodule (Doxygen Awesome)
```bash
git submodule add https://github.com/jothepro/doxygen-awesome-css.git
cd doxygen-awesome-css
git checkout v2.3.4
cd..
```

### Commit 해야 할 것
* Doxyfile
* doxygen-awesome-css
* Doxygen 생성 파일 
  * 커밋 내용: Generate Doxygen documentation for RocksDB v9.10.0 (1/3))