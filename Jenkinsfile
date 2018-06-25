pipeline{
  agent any
  stages{
    stage('Test pipe'){
    steps{
    	echo 'This is also a test'
      bat 'mvn --version'
      bat 'mvn clean package'
    }
       
    }
  }
}
