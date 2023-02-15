<?php
    class User{

        // conn
        private $conn;

        // table
        private $dbTable = "users";

        // col
        public $id;
        public $first_name;
        public $second_name;
        public $last_name;
        public $Occupation;
        public $phone;
        public $password;
        public $photo;
        public $email;
      
        // db conn
        public function __construct($db){
            $this->conn = $db;
        }

        // GET Users
        public function getUsers(){
            $sqlQuery = "SELECT * FROM " . $this->dbTable;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        // CREATE User
        public function createUser(){
            $sqlQuery = "INSERT INTO
                        ". $this->dbTable ."
                    SET
                    first_name = :first_name, 
                    second_name = :second_name, 
                    last_name = :last_name, 
                    Occupation = :Occupation, 
                    phone = :phone, 
                    password = :password, 
                    photo = :photo, 
                    email = :email";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->first_name=htmlspecialchars(strip_tags($this->first_name));
            $this->last_name=htmlspecialchars(strip_tags($this->second_name));
            $this->last_name=htmlspecialchars(strip_tags($this->last_name));
            $this->last_name=htmlspecialchars(strip_tags($this->Occupation));
            $this->last_name=htmlspecialchars(strip_tags($this->phone));
            $this->last_name=htmlspecialchars(strip_tags($this->password));
            $this->email=htmlspecialchars(strip_tags($this->photo));
            $this->email=htmlspecialchars(strip_tags($this->email));
                   
            // bind data
            $stmt->bindParam(":first_name", $this->first_name);
            $stmt->bindParam(":second_name", $this->second_name);
            $stmt->bindParam(":last_name", $this->last_name);
            $stmt->bindParam(":Occupation", $this->Occupation);
            $stmt->bindParam(":phone", $this->phone);
            $stmt->bindParam(":password", $this->password);
            $stmt->bindParam(":photo", $this->photo);
            $stmt->bindParam(":email", $this->email);
           
            if($stmt->execute()){
               return true;
            }
            return false;
        }

       // GET User
       public function getSingleUser(){
        $sqlQuery = "SELECT
                    id, 
                    first_name, 
                    last_name, 
                    email
                  FROM
                    ". $this->dbTable ."
                WHERE 
                   id = :id
                LIMIT 0,1";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":id", $this->id);
        $stmt->execute();
        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $this->first_name = $dataRow['first_name'];
        $this->last_name = $dataRow['last_name'];
        $this->email = $dataRow['email'];
      
    }      
        

        // UPDATE User
        public function updateUser(){
            $sqlQuery = "UPDATE
                        ". $this->dbTable ."
                    SET
                    first_name = :first_name, 
                    last_name = :last_name, 
                    email = :email
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->first_name=htmlspecialchars(strip_tags($this->first_name));
            $this->last_name=htmlspecialchars(strip_tags($this->last_name));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":first_name", $this->first_name);
            $stmt->bindParam(":last_name", $this->last_name);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // DELETE User
        function deleteUser(){
            $sqlQuery = "DELETE FROM " . $this->dbTable . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }

    }
?>