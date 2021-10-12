class MyData{
    private int readOnly;
    private int writeOnly;
    private int readWrite;
    private int noAccess;

    public int getReadOnly(){
        preconditionFunc();
        return readOnly;
    }
    
    public void setWriteOnly(int data){
        writeOnly = data;
    }

    public int getReadWrite(){
        return readWrite;
    }

    public void setReadWrite(int data){
        readWrite = data;
    }
}
